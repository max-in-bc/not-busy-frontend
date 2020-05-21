import { Place } from './place.interface';

export interface User{
    email: string,
    _id: string,
    favourite_places: Array<string>,

    auth_token: string,
    refresh_token: string
}