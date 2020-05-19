import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceListingsComponent } from './components/place-listings.component';
import { PlacesSharedModule } from '../places-shared.module';
import { PlaceListingsResolver } from './resolvers/place-listings.resolver';
import { PlaceListingsService } from './services/place-listings.service';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

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
    FormsModule,
    PlacesSharedModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule
  ], 
  providers: [
    PlaceListingsResolver,
    PlaceListingsService
  ]
})
export class PlaceListingsModule { }
