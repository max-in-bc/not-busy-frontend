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
import { HomeListingsPageComponent } from './components/home-listings-page.component';
import { HomeListingsPageResolver } from './resolvers/home-listings-page.resolver';
import { HomeListingsPageService } from './services/home-listings-page.service';

export const routes = [
  {
    path: '',
    component: HomeListingsPageComponent,
    resolve: {
      data: HomeListingsPageResolver
    }
  },
  {
    path: 'user/:userId',
    component: HomeListingsPageComponent,
    resolve: {
      data: HomeListingsPageResolver
    }
  }
];

@NgModule({
  declarations: [HomeListingsPageComponent],
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
    HomeListingsPageResolver,
    HomeListingsPageService
  ]
})
export class HomeListingsPageModule { }
