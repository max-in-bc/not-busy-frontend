import { Place } from './place.interface';

export interface User{
    email: string,
    favourite_places: Array<Place>,

    jwt_token: string,
    refresh_token: string
}