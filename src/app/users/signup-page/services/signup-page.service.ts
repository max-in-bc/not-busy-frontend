import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';
import { BaseAPIService } from 'src/app/shared/services/base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupPageService {

  constructor(private http: HttpClient, private api: BaseAPIService) { }

  signUpWithEmailAndPassword(email: string, password: string): Promise<{userId: string}> {
    return new Promise<{userId: string}>((resolve, reject) => {
      this.http.post(this.api.getBaseHref() + '/users ', {  email,password } )
        .subscribe(
          (user: {id: string}) => {
            resolve({userId: user.id});
          },
          err => {
            reject();
          }
        );

    })
  }
}

