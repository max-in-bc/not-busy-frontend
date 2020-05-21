

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesSharedModule } from '../places-shared.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavouriteListingsPageComponent } from './components/favourite-listings-page/favourite-listings-page.component';
import { FavouriteListingsPageResolver } from './resolvers/favourite-listings-page-resolver.service';
import { FavouriteListingsPageService } from './services/favourite-listings-page.service';

export const routes = [
  {
    path: '',
    component: FavouriteListingsPageComponent,
    resolve: {
      data: FavouriteListingsPageResolver
    }
  },
  {
    path: 'user/:userId',
    component: FavouriteListingsPageComponent,
    resolve: {
      data: FavouriteListingsPageResolver
    }
  }
];

@NgModule({
  declarations: [FavouriteListingsPageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    SharedModule,
    PlacesSharedModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    LoadingBarRouterModule,
    LoadingBarModule
  ], 
  providers: [
    FavouriteListingsPageResolver,
    FavouriteListingsPageService
  ]
})
export class FavouriteListingsPageModule { }
