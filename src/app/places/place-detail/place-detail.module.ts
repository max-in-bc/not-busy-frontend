import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceDetailComponent } from './components/place-detail.component';



@NgModule({
  declarations: [PlaceDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [PlaceDetailComponent]
})
export class PlaceDetailModule { }
