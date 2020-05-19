import { LatLng } from './lat-lng.interface';

export interface Place {
    name: string,
    address: string,
    location: LatLng,
    place_id: string
}