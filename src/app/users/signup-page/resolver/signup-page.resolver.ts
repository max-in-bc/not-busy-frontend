import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupPageResolver implements Resolve<any> {

  resolve(): Promise<any> {
    return new Promise((resolve, reject) => {

      return resolve({
      })
    })
  }

  constructor() { }
}
