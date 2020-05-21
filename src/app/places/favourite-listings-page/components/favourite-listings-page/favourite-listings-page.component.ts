import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/shared/interfaces/place.interface';
import { User } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/users/services/auth.service';

@Component({
  selector: 'app-favourite-listings-page',
  templateUrl: './favourite-listings-page.component.html',
  styleUrls: ['./favourite-listings-page.component.scss']
})
export class FavouriteListingsPageComponent implements OnInit {

  
  is_loading: boolean = false;
  keywords: string = '';
  places: Array<Place> = [];
  user: User;
  constructor(public route : ActivatedRoute, public router: Router, private authServ: AuthService) { 
    this.places = this.route.snapshot.data['data'].places;
    this.keywords = this.route.snapshot.data['data'].keywords;
    this.user = this.route.snapshot.data['data'].user;
    
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  ngOnInit() {
  }


}
