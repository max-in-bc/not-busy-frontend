import { Injectable } from '@angular/core';
import { Place } from '../../../shared/interfaces/place.interface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceDetailService {

  constructor() { }


  getPlaceDetail(place_id: string): Observable<Place>{

    return  new BehaviorSubject<Place>({name:"Test", place_id: place_id, address: '', location: {lat:1,lng:1}}).asObservable();
  }

}
