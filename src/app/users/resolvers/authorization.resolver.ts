import { Injectable } from '@angular/core';
import { Resolve, Router, CanActivate } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthorizationResolver implements CanActivate{

  constructor( private authServ: AuthService, private router: Router) {}
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    let user = this.authServ.getCurrentUser();
    if (user){
      this.router.navigate(['/user/' + user._id])
    }
    
    return true
  }

}
