import { Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPIService } from '../services/base-api.service';

@Directive({
  selector: '[noRequestsPage]'
})
export class NoRequestPageDirective {

  constructor(private api: BaseAPIService) { 
    this.api.first_request_returned = true;
    
  }
  


}
