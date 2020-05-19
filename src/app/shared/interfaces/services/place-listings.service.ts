import { Injectable } from '@angular/core';
import { LatLng } from 'src/app/shared/interfaces/lat-lng.interface';
import { Place } from '../../../shared/interfaces/place.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceListingsService {

  constructor(private http: HttpClient) { }

  searchPlacesByLocation(location: LatLng, search_term?: string):Promise<Array<Place>>{

    return new Promise<Array<Place>>(resolve => {
      return new Promise((resolve, reject) => {
        this.http.get(this.baseHref + '/assets/data/banners.json')
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
            reject();
          }
        );
      });
      resolve([
        {name: "1_", place_id: "1"},
        {name: "2_", place_id: "2"},
        {name: "3_", place_id: "3"},
      ])
    })
  }
}
