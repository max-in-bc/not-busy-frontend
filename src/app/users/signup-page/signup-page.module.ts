import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './components/signup-page.component';
import { RouterModule } from '@angular/router';
import { UsersSharedModule } from '../users-shared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizationResolver } from '../resolvers/authorization.resolver';



export const routes = [
  {
    path: '',
    component: SignupPageComponent,
    canActivate: [AuthorizationResolver]
    
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
  ],
  providers: [
    AuthorizationResolver
  ]
})
export class SignupPageModule { }
