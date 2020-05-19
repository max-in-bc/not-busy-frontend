import { Component, OnInit, Input } from '@angular/core';
import { PlaceDetailService } from '../services/place-detail.service';
import { Place } from '../../place.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {

  @Input() place_id: string;
  place$: Observable<Place>;
  constructor(private placeDetailServ: PlaceDetailService) { }

  async ngOnInit() {
    if (this.place_id){
      this.place$ = await this.placeDetailServ.getPlaceDetail(this.place_id);
    }
  }

}
