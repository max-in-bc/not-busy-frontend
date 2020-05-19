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

  is_loading: boolean = false;
  keywords: string = '';
  places: Array<Place> = [];
  constructor(public route : ActivatedRoute, private placeListingsServ: PlaceListingsService, private locationServ: LocationService) { 
    this.places = this.route.snapshot.data['data'].places
    this.keywords = this.route.snapshot.data['data'].keywords
    
  }

  ngOnInit(): void {
  }

  async searchPlaces(){
    this.is_loading = true;
    this.places = [];
    this.places = await this.placeListingsServ.searchPlacesByLocation(this.locationServ.getClientLocation(), this.keywords)
    if (this.keywords.length > 0) this.updateRouteParamWithSearchTerm();
    this.is_loading = false;
  }

  private updateRouteParamWithSearchTerm(){
    const params = new URLSearchParams(window.location.search);
    params.set("keywords", this.keywords);
    window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${params}`));
  }

}
