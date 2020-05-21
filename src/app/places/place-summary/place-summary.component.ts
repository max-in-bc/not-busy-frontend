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
  popularity_level: number|null = null;
  constructor(private router: Router, private favouritePlacesServ: FavouritePlacesService, private authServ: AuthService) { }

  ngOnInit(): void {
    let user =  this.authServ.getCurrentUser();
    this.is_favourite = user != null && user.favourite_places.indexOf(this.place.place_id) != -1;

    if(this.place?.popularity_data?.popular_times){
      let d = new Date();
      let current_day = d.toLocaleString('en-us', {  weekday: 'long' });
      let current_hour = d.getHours();
        let day_info = this.place.popularity_data.popular_times.filter(d => d.name == current_day);
        this.popularity_level = +day_info[0].data[current_hour];
    }
     
    
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
