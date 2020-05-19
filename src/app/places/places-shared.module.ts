import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceSummaryComponent } from './place-summary/place-summary.component';
import { PlaceDetailComponent } from './place-detail/components/place-detail.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [PlaceSummaryComponent,PlaceDetailComponent],
  imports: [
    CommonModule,
    MatCardModule
  ], 
  exports: [
    PlaceSummaryComponent,
    PlaceDetailComponent
  ]
})
export class PlacesSharedModule { }
