import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';
import { BaseAPIService } from 'src/app/shared/services/base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private http: HttpClient, private api: BaseAPIService) { }

  signInWithEmailAndPassword(email: string, password: string): Promise<{userId: string, accessToken: string, refreshToken: string}> {
    return new Promise<{userId: string, accessToken: string, refreshToken: string}>((resolve, reject) => {
      this.http.post(this.api.getBaseHref() + '/auth ', { email, password })
        .subscribe(
          (user: {userId: string, accessToken: string, refreshToken: string}) => {
            resolve(user);
          },
          err => {
            reject();
          }
        );

    })
  }
}

