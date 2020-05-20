import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { BaseAPIService } from 'src/app/shared/services/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _current_user: User|null = null;
  constructor(private http: HttpClient, private api: BaseAPIService) { }


  async setUser(user_data: {userId: string, accessToken: string, refreshToken: string}): Promise<User>{
    let user = await this.getAuthUserDetails(user_data.userId, user_data.accessToken);
    user.auth_token = user_data.accessToken;
    user.refresh_token = user_data.refreshToken;
    this._current_user = user;

    
    localStorage.setItem('nba::current_user_id', user_data.userId);
    localStorage.setItem('nba::access_token', user_data.accessToken);
    localStorage.setItem('nba::refresh_token', user_data.refreshToken);
    return this._current_user;

  }

  private async getAuthUserDetails(userId: string, auth_token: string): Promise<User>{
    return new Promise<User>((resolve, reject) => {
      this.http.get(this.api.getBaseHref() + '/users/' + userId, { headers: { Authorization: 'Bearer ' + auth_token } })
        .subscribe(
          (user: User) => {
            resolve(user);
          },
          err => {
            reject();
          }
        );

    })
  }

  getCurrentUser(): User|null{
    return this._current_user;
  }

  unauthorizeUser(){
    this._current_user = null;
    localStorage.removeItem('nba::current_user_id');
    localStorage.removeItem('nba::access_token');
    localStorage.removeItem('nba::refresh_token');
  }

  checkForAuth(): Promise<User|null>{
    if (this._current_user) return Promise.resolve(this.getCurrentUser());
    let current_user_id = localStorage.getItem('nba::current_user_id');
    let access_token = localStorage.getItem('nba::access_token');
    let refresh_token = localStorage.getItem('nba::refresh_token');
    if (!access_token || !current_user_id || !refresh_token) return Promise.resolve(null);

    return this.setUser({userId: <string>current_user_id, accessToken: <string>access_token, refreshToken: <string>refresh_token})

  }
}
