import { Injectable } from '@angular/core';
import { User, UserAuthData } from 'src/app/shared/interfaces/user.interface';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpBackend } from '@angular/common/http';
import { BaseAPIService } from 'src/app/shared/services/base-api.service';
import { Observable, of } from 'rxjs';
import { map, flatMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _current_user: User|null = null;
  private _httpSilent: HttpClient;
  constructor(private http: HttpClient, private api: BaseAPIService, handler: HttpBackend) {
    this._httpSilent = new HttpClient(handler);
   }


  async setUser(user_data: UserAuthData): Promise<User>{
    let user = await this.getAuthUserDetails(user_data._id, user_data.auth_token);
    user.auth_token = user_data.auth_token;
    user.refresh_token = user_data.refresh_token;
    this._current_user = user;

    
    localStorage.setItem('nba::current_user_id', user_data._id);
    localStorage.setItem('nba::auth_token', user_data.auth_token);
    localStorage.setItem('nba::refresh_token', user_data.refresh_token);
    return this._current_user;

  }

  private getSessionInfo(): UserAuthData|null{
    let current_user_id = localStorage.getItem('nba::current_user_id');
    let auth_token = localStorage.getItem('nba::auth_token');
    let refresh_token = localStorage.getItem('nba::refresh_token');

    if (!refresh_token || !auth_token || !current_user_id) return null;
    return {
      _id: current_user_id,
      auth_token: auth_token,
      refresh_token: refresh_token
    }
  }

  private async getAuthUserDetails(_id: string, auth_token: string): Promise<User>{
    return new Promise<User>((resolve, reject) => {
      this.http.get(this.api.getBaseHref() + '/users/' + _id, { headers: { Authorization: 'Bearer ' + auth_token } })
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

  async updateUser(user: User): Promise<any>{
    return new Promise<User>((resolve, reject) => {
      this.http.put(this.api.getBaseHref() + '/users/' + user._id, {
        email: user.email,
        favourite_places: user.favourite_places,
    
      }, { headers: { Authorization: 'Bearer ' + user.auth_token } }, 
      )
        .subscribe(
          (u: User) => {
            this._current_user = user;
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
    localStorage.removeItem('nba::auth_token');
    localStorage.removeItem('nba::refresh_token');
  }

  checkForAuth(): Promise<User|null>{
    if (this._current_user) return Promise.resolve(this.getCurrentUser());
  
    let data: UserAuthData|null = this.getSessionInfo();
    if (!data) return Promise.resolve(null);

    return this.setUser({_id: <string>data._id, auth_token: <string>data.auth_token, refresh_token: <string>data.refresh_token})

  }

  refreshAuth(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    let data: UserAuthData|null = this.getSessionInfo();
    if (!data)   return next.handle(request);
    else{
      return this._httpSilent.post(this.api.getBaseHref() + '/auth/refresh-token', {refreshToken: data.refresh_token},  { headers: { Authorization: 'Bearer ' + data.auth_token }}  )
          .pipe(
             catchError(err => {
              
              this.unauthorizeUser();
              return next.handle(request);
             }),
            flatMap((auth_data:UserAuthData) => {
            if (data){

              data.auth_token = auth_data.auth_token;
              data.refresh_token = auth_data.refresh_token;
              this.setUser(auth_data);
              request.headers.set("Authorization", 'Bearer ' + auth_data.auth_token)
            }
            else{

              this.unauthorizeUser();
            }
            return next.handle(request);
          }));
  
          
          
  

    }
  }
}
