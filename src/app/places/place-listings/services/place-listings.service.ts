import { Injectable } from '@angular/core';
import { LatLng } from 'src/app/shared/interfaces/lat-lng.interface';
import { Place } from '../../../shared/interfaces/place.interface';
import { HttpClient } from '@angular/common/http';
import { BaseAPIService } from 'src/app/shared/services/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceListingsService {

  constructor(private http: HttpClient, private api: BaseAPIService) { }

  searchPlacesByLocation(location: LatLng, search_term?: string):Promise<Array<Place>>{

    return new Promise<Array<Place>>((resolve,reject) => {
        this.http.get(this.api.getBaseHref() + '/places', {params: {lat: location.lat.toString(), lng: location.lng.toString(), searchTerm: search_term ? search_term : ''}})
        .subscribe(
          data => {
            resolve(<Array<Place>>data['places']);
          },
          err => {
            reject();
          }
        );
      
    })
  }
}
