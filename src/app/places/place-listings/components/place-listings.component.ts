import { Component, OnInit } from '@angular/core';
import { Place } from '../../../shared/interfaces/place.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-listings',
  templateUrl: './place-listings.component.html',
  styleUrls: ['./place-listings.component.scss']
})
export class PlaceListingsComponent implements OnInit {

  places: Array<Place> = [];
  constructor(private route : ActivatedRoute) { 
    this.places = this.route.snapshot.data['data'].places
  }

  ngOnInit(): void {
  }

}
