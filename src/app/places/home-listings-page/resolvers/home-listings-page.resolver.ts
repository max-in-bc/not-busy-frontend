import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { forkJoin } from 'rxjs';
import { HomeListingsPageService } from '../services/home-listings-page.service';
import { LocationService } from 'src/app/shared/services/location.service';

import { last, pluck} from 'rxjs/operators';
import { AuthService } from 'src/app/users/services/auth.service';

@Injectable()
export class HomeListingsPageResolver implements Resolve<any> {

  constructor(
    private placeListingsServ: HomeListingsPageService,
    private locationServ: LocationService,
    private authServ: AuthService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return new Promise(async (resolve, reject) => {
      await this.locationServ.waitForLocation(); //we want lat lng before proceeding

      await this.authServ.checkForAuth();
    
      forkJoin(
        this.placeListingsServ.searchPlacesByLocation(this.locationServ.getClientLocation(), route.params.keywords),
      ).subscribe((data: any) => {
        resolve({
          places: data[0],
          keywords: route.params.keywords 
        });
      }, (err) => {
        resolve({
          places: [],
        });
      });
    });
  }
}
