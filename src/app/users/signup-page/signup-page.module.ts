import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './components/signup-page.component';
import { RouterModule } from '@angular/router';
import { UsersSharedModule } from '../users-shared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



export const routes = [
  {
    path: '',
    component: SignupPageComponent
    
  }
];
@NgModule({
  declarations: [SignupPageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    UsersSharedModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SignupPageModule { }
