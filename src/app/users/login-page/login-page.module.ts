import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page.component';
import { RouterModule } from '@angular/router';


export const routes = [
  {
    path: '',
    component: LoginPageComponent,
    
  }
];
@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class LoginPageModule { }