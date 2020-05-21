import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseAPIService } from './base-api.service';

@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {

  constructor(private api: BaseAPIService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if (this.api.first_request_returned) return next.handle(request);
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              this.api.first_request_returned = true;
          }
          return event;
      }));
  }

  
}
