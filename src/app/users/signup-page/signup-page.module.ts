import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { RouterModule } from '@angular/router';



export const routes = [
  {
    path: '',
    component: SignupPageComponent
    
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SignupPageModule { }
