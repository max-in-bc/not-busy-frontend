import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { forkJoin } from 'rxjs';
import { LocationService } from 'src/app/shared/services/location.service';

import { AuthService } from 'src/app/users/services/auth.service';
import { FavouriteListingsPageService } from '../services/favourite-listings-page.service';
import { User } from 'src/app/shared/interfaces/user.interface';

@Injectable()
export class FavouriteListingsPageResolver implements Resolve<any> {

  constructor(
    private favouriteListingsServ: FavouriteListingsPageService,
    private locationServ: LocationService,
    private authServ: AuthService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return new Promise(async (res, rej) => {
      await this.locationServ.waitForLocation(); //we want lat lng before proceeding

      let user: User = await this.authServ.checkForAuth();
    
      forkJoin(
        this.favouriteListingsServ.searchPlacesByLocationWithAuth(user.auth_token, this.locationServ.getClientLocation(), route.params.keywords),
      ).subscribe((data: any) => {
        res({
          places: data[0],
          keywords: route.params.keywords 
        });
      }, (err) => {
        res({
          places: [],
        });
      });
    });
  }
}

