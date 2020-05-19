import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceDetailModule } from './place-detail/place-detail.module';
import { PlaceSummaryComponent } from './place-summary/place-summary.component';

@NgModule({
  declarations: [PlaceSummaryComponent],
  imports: [
    CommonModule,
    PlaceDetailModule
  ], 
  exports: [
    PlaceSummaryComponent
  ]
})
export class PlacesSharedModule { }
