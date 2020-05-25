import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseAPIService {

  constructor() { }

  private base_href = 'https://ec2-54-201-199-86.us-west-2.compute.amazonaws.com:3000';
  public first_request_returned: boolean = false;

  getBaseHref(): string{
    return this.base_href;
  }


  waitForFirstResponse(): Promise<boolean>{
    if (this.first_request_returned) return Promise.resolve(true);
    else{
      return new Promise<boolean>(resolve => {
  
        let timer = setInterval(() => {
          if (this.first_request_returned) {
            clearInterval(timer);
            resolve(true);
          }
        }, 500);
      });
  
    }


    
  }
}
