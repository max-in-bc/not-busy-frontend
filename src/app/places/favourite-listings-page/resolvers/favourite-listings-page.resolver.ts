import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import {  from } from 'rxjs';
import { LocationService } from 'src/app/shared/services/location.service';

import { AuthService } from 'src/app/users/services/auth.service';
import { FavouriteListingsPageService } from '../services/favourite-listings-page.service';
import { User } from 'src/app/shared/interfaces/user.interface';
import { Place } from 'src/app/shared/interfaces/place.interface';

@Injectable()
export class FavouriteListingsPageResolver implements Resolve<any> {

  constructor(
    private favouriteListingsServ: FavouriteListingsPageService,
    private locationServ: LocationService,
    private authServ: AuthService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return new Promise(async (res, rej) => {
      await this.locationServ.waitForLocation(); //we want lat lng before proceeding

      let user: User|null = await this.authServ.checkForAuth();
    
      if (!user){
        this.router.navigate(['/home'])
        rej('Needs authentication')
      }
      else{
        
        from(this.favouriteListingsServ.searchPlacesByLocationWithAuth(user._id, user.auth_token, this.locationServ.getClientLocation()))
        .subscribe((data: Array<Place>) => {
          res({
            places: data,
            user
          });
        }, (err) => {
          res({
            places: [],
          });
        });
      }
      
    });
  }
}

