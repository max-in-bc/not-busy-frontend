import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../shared/interfaces/place.interface';
import { FavouritePlacesService } from 'src/app/users/services/favourite-places.service';
import { AuthService } from 'src/app/users/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-summary',
  templateUrl: './place-summary.component.html',
  styleUrls: ['./place-summary.component.scss']
})
export class PlaceSummaryComponent implements OnInit {

  @Input() place: Place;
  is_favourite: boolean = false;
  constructor(private router: Router, private favouritePlacesServ: FavouritePlacesService, private authServ: AuthService) { }

  ngOnInit(): void {
    let user =  this.authServ.getCurrentUser();
    this.is_favourite = user && user.favourite_places.indexOf(this.place.place_id) != -1
  }

  favouritePlace(){
      let user =  this.authServ.getCurrentUser();
      if (user){
        this.favouritePlacesServ.addPlaceToUserFavourites(this.place,user.auth_token).then(favourites => {
        
          this.is_favourite = true;
        });
      }
      else{
        this.router.navigate(['/login']);
      }
      
  }

  unfavouritePlace(){
    let user =  this.authServ.getCurrentUser();
    if (user){
      this.favouritePlacesServ.removePlaceFromUserFavourites(this.place, user.auth_token).then(favourites => {
      
    this.is_favourite = false;
      });
    }

  }

}
