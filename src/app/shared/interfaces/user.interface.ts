
export interface UserAuthData{

    _id: string,
    auth_token: string,
    refresh_token: string
}
export interface User extends UserAuthData{
    email: string,
    favourite_places: Array<string>,

}