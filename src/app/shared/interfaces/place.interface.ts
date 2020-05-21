import { LatLng } from './lat-lng.interface';

export interface Place {
    name: string,
    address: string,
    location: LatLng,
    place_id: string,
    thumbnail?: string,

    popularity_data?: {
        popular_times?: Array<{name: string, data: Array<number>}>,
        time_wait?: Array<number>,
        time_spent?: Array<number>,
        current_popularity?: number
    }
}