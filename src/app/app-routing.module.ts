import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('./places/home-listings-page/home-listings-page.module').then(m => m.HomeListingsPageModule)
  },
  {
    path: 'home/:keywords',
    pathMatch: 'full',
    loadChildren: () => import('./places/home-listings-page/home-listings-page.module').then(m => m.HomeListingsPageModule)
  },
  {
    path: 'user/:userId',
    pathMatch: 'full',
    loadChildren: () => import('./places/favourite-listings-page/favourite-listings-page.module').then(m => m.FavouriteListingsPageModule)
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () => import('./users/login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signin',
    pathMatch: 'full',
    loadChildren: () => import('./users/login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    pathMatch: 'full',
    loadChildren: () => import('./users/signup-page/signup-page.module').then(m => m.SignupPageModule)
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
