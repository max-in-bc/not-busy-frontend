import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  signInWithEmailAndPassword(email: string, password: string): Observable<any>{
    return of(true);
  }
}
