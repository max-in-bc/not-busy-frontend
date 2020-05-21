import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceSummaryComponent } from './place-summary/place-summary.component';
import { PlaceDetailComponent } from './place-detail/components/place-detail.component';

import {MatCardModule} from '@angular/material/card';
import { HomeListingsPageComponent } from './home-listings-page/components/home-listings-page.component';
import { PlaceListingsComponent } from './place-listings/place-listings.component';
@NgModule({
  declarations: [PlaceSummaryComponent,PlaceDetailComponent, PlaceListingsComponent],
  imports: [
    CommonModule,
    MatCardModule
  ], 
  exports: [
    PlaceSummaryComponent,
    PlaceDetailComponent,
    PlaceListingsComponent
  ]
})
export class PlacesSharedModule { }
