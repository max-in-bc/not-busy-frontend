import { Injectable } from '@angular/core';
import { Place } from '../../place.interface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceDetailService {

  constructor() { }


  getPlaceDetail(place_id: string): Observable<Place>{

    return  new BehaviorSubject<Place>({title:"Test"}).asObservable();
  }

}
