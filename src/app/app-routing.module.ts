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
    loadChildren: () => import('./places/place-listings/place-listings.module').then(m => m.PlaceListingsModule)
  },
  {
    path: 'home/:keywords',
    pathMatch: 'full',
    loadChildren: () => import('./places/place-listings/place-listings.module').then(m => m.PlaceListingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
