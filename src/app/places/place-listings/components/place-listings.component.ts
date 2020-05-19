import { Component, OnInit } from '@angular/core';
import { Place } from '../../../shared/interfaces/place.interface';
import { ActivatedRoute } from '@angular/router';
import { PlaceListingsService } from '../services/place-listings.service';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-place-listings',
  templateUrl: './place-listings.component.html',
  styleUrls: ['./place-listings.component.scss']
})
export class PlaceListingsComponent implements OnInit {

  search_term: string = '';
  places: Array<Place> = [];
  constructor(private route : ActivatedRoute, private placeListingsServ: PlaceListingsService, private locationServ: LocationService) { 
    this.places = this.route.snapshot.data['data'].places
  }

  ngOnInit(): void {
  }

  async searchPlaces(){
    this.places = await this.placeListingsServ.searchPlacesByLocation(this.locationServ.getClientLocation(), this.search_term)
  }

}
