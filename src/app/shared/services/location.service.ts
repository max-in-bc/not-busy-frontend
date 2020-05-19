import { Injectable } from '@angular/core';
import { LatLng } from '../interfaces/lat-lng.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() {
    this.watchClientLocation();
  }
  private _location: LatLng;
  private _initialized: boolean = false;

  private watchClientLocation(){
    if (navigator.geolocation) {
      //follow user while they keep the app open
      navigator.geolocation.watchPosition((position) => {
         this._location = {
          lat:position.coords.latitude,
          lng:position.coords.longitude
        };
        this._initialized = true;
      }, this.catchGeolocationApiError);
    } else {
      console.log('Geolocation not available');
      this._initialized = true;
    }
  }

  private catchGeolocationApiError(error){
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log( "User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        console.log( "Location information is unavailable.")
        break;
      case error.TIMEOUT:
        console.log( "The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        console.log( "An unknown error occurred.")
        break;
    }
    this._initialized = true;
  }
  
  public getClientLocation(): LatLng{
    return this._location;
  }

  public waitForLocation():  Promise<LatLng>{
    
    if (this._initialized) return Promise.resolve(this.getClientLocation());

    return new Promise<LatLng>(resolve => {

      
      let timer = setInterval(() => {
        if (this._initialized) {
          clearInterval(timer);
          resolve(this.getClientLocation());
        }
      }, 150);
    });

  }
}
