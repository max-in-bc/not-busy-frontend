import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page.component';
import { RouterModule } from '@angular/router';
import { UsersSharedModule } from '../users-shared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


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
    CommonModule,
    UsersSharedModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [


  ]
})
export class LoginPageModule { }
