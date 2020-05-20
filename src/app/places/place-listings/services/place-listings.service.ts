import { Injectable } from '@angular/core';
import { LatLng } from 'src/app/shared/interfaces/lat-lng.interface';
import { Place } from '../../../shared/interfaces/place.interface';
import { HttpClient } from '@angular/common/http';
import { BaseAPIService } from 'src/app/shared/services/base-api.service';
import { AuthService } from 'src/app/users/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceListingsService {

  constructor(private http: HttpClient, private api: BaseAPIService, private authServ: AuthService) { }

  searchPlacesByLocation(location: LatLng, keywords?: string):Promise<Array<Place>>{

    return new Promise<Array<Place>>((resolve,reject) => {
        let user = this.authServ.getCurrentUser();
        let auth_token = user && user.auth_token ? user.auth_token : '';
        let params = { params: {lat: location.lat.toString(), lng: location.lng.toString(), searchTerm: keywords ? keywords : ''}};
        
        if (auth_token) params['headers'] = { Authorization: 'Bearer ' + auth_token };
        this.http.get(this.api.getBaseHref() + '/places', params)
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
