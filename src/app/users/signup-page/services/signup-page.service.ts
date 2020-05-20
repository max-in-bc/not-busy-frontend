import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';
import { BaseAPIService } from 'src/app/shared/services/base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupPageService {

  constructor(private http: HttpClient, private api: BaseAPIService) { }

  signUpWithEmailAndPassword(email: string, password: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.http.post(this.api.getBaseHref() + '/users ', { params: { header: btoa(email + '\_:_/'  + password) } })
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
}

