import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseAPIService {

  constructor() { }

  private base_href = 'http://localhost:3000';

  getBaseHref(): string{
    return this.base_href;
  }
}
