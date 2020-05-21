import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../shared/interfaces/place.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeListingsPageService } from '../home-listings-page/services/home-listings-page.service';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-place-listings',
  templateUrl: './place-listings.component.html',
  styleUrls: ['./place-listings.component.scss']
})
export class PlaceListingsComponent implements OnInit {

  @Input() keywords: string = '';
  @Input() places: Array<Place>;
  constructor(public route : ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    console.log(this.places);
  }


}
