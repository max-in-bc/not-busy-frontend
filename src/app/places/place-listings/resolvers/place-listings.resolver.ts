import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { forkJoin } from 'rxjs';
import { PlaceListingsService } from '../services/place-listings.service';


@Injectable()
export class PlaceListingsResolver implements Resolve<any> {

  constructor(
    private placeListingsServ: PlaceListingsService,
  ) {}

  resolve() {
    return new Promise((resolve, reject) => {
      forkJoin(
        this.placeListingsServ.searchPlacesByLocation({lat:1,lng:1}),
      ).subscribe((data: any) => {
        resolve({
          places: data[0],
        });
      });
    });
  }
}
