import { Injectable } from '@angular/core';
import { User, UserAuthData } from 'src/app/shared/interfaces/user.interface';
import { BaseAPIService } from 'src/app/shared/services/base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private http: HttpClient, private api: BaseAPIService) { }

  signInWithEmailAndPassword(email: string, password: string): Promise<UserAuthData> {
    return new Promise<UserAuthData>((resolve, reject) => {
      this.http.post(this.api.getBaseHref() + '/auth ', { email, password })
        .subscribe(
          (user: any) => {
            resolve({
              
              _id: user.userId,
              auth_token: user.accessToken,
              refresh_token: user.refreshToken
            });
          },
          err => {
            reject();
          }
        );

    })
  }
}

