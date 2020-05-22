import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseAPIService } from './base-api.service';
import { AuthService } from 'src/app/users/services/auth.service';

@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {

  constructor(private api: BaseAPIService, private authServ: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status == 403){
          return this.authServ.refreshAuth(request,next);
        }
        else{
          return next.handle(request);
        }
      }),
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              this.api.first_request_returned = true;
              
          }
          return event;
      }));
  }

  
}
