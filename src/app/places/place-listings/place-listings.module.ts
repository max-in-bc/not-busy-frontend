import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceListingsComponent } from './components/place-listings.component';
import { PlacesSharedModule } from '../places-shared.module';
import { PlaceListingsResolver } from './resolvers/place-listings.resolver';
import { PlaceListingsService } from './services/place-listings.service';
import { RouterModule } from '@angular/router';

export const routes = [
  {
    path: '',
    component: PlaceListingsComponent,
    resolve: {
      data: PlaceListingsResolver
    }
  }
];

@NgModule({
  declarations: [PlaceListingsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    PlacesSharedModule
  ], 
  providers: [
    PlaceListingsResolver,
    PlaceListingsService
  ]
})
export class PlaceListingsModule { }
