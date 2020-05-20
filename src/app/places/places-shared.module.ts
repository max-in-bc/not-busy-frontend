import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceSummaryComponent } from './place-summary/place-summary.component';
import { PlaceDetailComponent } from './place-detail/components/place-detail.component';

import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { PlaceListingsResolver } from './place-listings/resolvers/place-listings.resolver';
import { PlaceListingsComponent } from './place-listings/components/place-listings.component';

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
  declarations: [PlaceSummaryComponent,PlaceDetailComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule
  ], 
  exports: [
    PlaceSummaryComponent,
    PlaceDetailComponent
  ]
})
export class PlacesSharedModule { }
