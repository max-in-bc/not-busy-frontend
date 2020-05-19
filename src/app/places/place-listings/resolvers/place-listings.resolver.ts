import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { forkJoin } from 'rxjs';
import { PlaceListingsService } from '../services/place-listings.service';
import { LocationService } from 'src/app/shared/services/location.service';


@Injectable()
export class PlaceListingsResolver implements Resolve<any> {

  constructor(
    private placeListingsServ: PlaceListingsService,
    private locationServ: LocationService,
  ) {}

  resolve() {
    return new Promise(async (resolve, reject) => {
      await this.locationServ.waitForLocation(); //we want lat lng before proceeding
      forkJoin(
        this.placeListingsServ.searchPlacesByLocation(this.locationServ.getClientLocation()),
      ).subscribe((data: any) => {
        resolve({
          places: data[0],
        });
      });
    });
  }
}
