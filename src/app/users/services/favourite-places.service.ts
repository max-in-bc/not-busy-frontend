import { Injectable } from '@angular/core';
import { Place } from 'src/app/shared/interfaces/place.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FavouritePlacesService {

  constructor(private authServ: AuthService) { }

  async addPlaceToUserFavourites(place: Place, auth_token: string): Promise<Array<string>>{

    let user = this.authServ.getCurrentUser();
    if (user && user.auth_token == auth_token && user.favourite_places.indexOf(place.place_id) == -1){
      user.favourite_places.push(place.place_id);
      await this.authServ.updateUser(user);
    }
    return Promise.resolve(user?.favourite_places? user.favourite_places : []);
  }

  async removePlaceFromUserFavourites(place: Place, auth_token: string): Promise<Array<string>>{
    let user = this.authServ.getCurrentUser();
    if (user && user.auth_token == auth_token && user.favourite_places.indexOf(place.place_id) != -1){
      user.favourite_places.splice(user.favourite_places.indexOf(place.place_id),1);
      await this.authServ.updateUser(user);
    }
    return Promise.resolve(user?.favourite_places? user.favourite_places : []);
  }

  getUserFavourites(auth_token): Promise<Array<Place>>{
    return Promise.resolve([]);
  }
}
