import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceSummaryComponent } from './place-summary/place-summary.component';
import { PlaceDetailComponent } from './place-detail/components/place-detail.component';

@NgModule({
  declarations: [PlaceSummaryComponent,PlaceDetailComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    PlaceSummaryComponent,
    PlaceDetailComponent
  ]
})
export class PlacesSharedModule { }
