import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/shared/interfaces/place.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-listings-page',
  templateUrl: './home-listings-page.component.html',
  styleUrls: ['./home-listings-page.component.scss']
})
export class HomeListingsPageComponent {

  is_loading: boolean = false;
  keywords: string = '';
  places: Array<Place> = [];
  constructor(public route : ActivatedRoute, public router: Router) { 
    this.places = this.route.snapshot.data['data'].places
    this.keywords = this.route.snapshot.data['data'].keywords
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }




}
