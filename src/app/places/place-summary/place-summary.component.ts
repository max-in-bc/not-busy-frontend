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
  popularity: { level: number, text: string } | null = null;
  constructor(private router: Router, private favouritePlacesServ: FavouritePlacesService, private authServ: AuthService) { }

  ngOnInit(): void {
    let user = this.authServ.getCurrentUser();
    this.is_favourite = user != null && user.favourite_places.indexOf(this.place.place_id) != -1;

    if (this.place?.popularity_data) {
      if (this.place.popularity_data.popular_times) {
        let d = new Date();
        let current_day = d.toLocaleString('en-us', { weekday: 'long' });
        let current_hour = d.getHours();
        let day_info = this.place.popularity_data.popular_times.filter(d => d.name == current_day);
        this.popularity = { level: this.place.popularity_data.current_popularity ? this.place.popularity_data.current_popularity :  +day_info[0].data[current_hour], text: this.generatePopularityText(this.place.name, +day_info[0].data[current_hour]) };
      }
      else if (this.place.popularity_data.current_popularity) {
        this.popularity = { level: this.place.popularity_data.current_popularity, text: this.generatePopularityText(this.place.name,  this.place.popularity_data.current_popularity) };
      
      } 

    }


  }

  private generatePopularityText(place_name: string, popularity_level: number): string {

    if (popularity_level == 0) {
      //closed
      return 'closed.'
    }
    else if (popularity_level > 0 && popularity_level < 40) {
      return 'not busy right now.'
    }
    else if (popularity_level >= 40 && popularity_level <= 60) {
      return 'averagely busy right now.'
    }
    else if (popularity_level > 60 && popularity_level <= 75) {
      return 'fairly busy right now.'
    }
    else {
      return 'very busy right now.'
    }
  }

  favouritePlace() {
    let user = this.authServ.getCurrentUser();
    if (user) {
      this.favouritePlacesServ.addPlaceToUserFavourites(this.place, user.auth_token).then(favourites => {

        this.is_favourite = true;
      });
    }
    else {
      this.router.navigate(['/login']);
    }

  }

  unfavouritePlace() {
    let user = this.authServ.getCurrentUser();
    if (user) {
      this.favouritePlacesServ.removePlaceFromUserFavourites(this.place, user.auth_token).then(favourites => {

        this.is_favourite = false;
      });
    }

  }

}
