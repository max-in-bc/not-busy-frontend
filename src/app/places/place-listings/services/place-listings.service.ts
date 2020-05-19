import { Injectable } from '@angular/core';
import { LatLng } from 'src/app/shared/interfaces/lat-lng.interface';
import { Place } from '../../../shared/interfaces/place.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaceListingsService {

  constructor() { }

  searchPlacesByLocation(location: LatLng, search_term?: string):Promise<Array<Place>>{

    return new Promise<Array<Place>>(resolve => {
      resolve([
        {title: "1_", place_id: "1"},
        {title: "2_", place_id: "2"},
        {title: "3_", place_id: "3"},
      ])
    })
  }
}
