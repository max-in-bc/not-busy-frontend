import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page.component';
import { RouterModule } from '@angular/router';
import { UsersSharedModule } from '../users-shared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthorizationResolver } from '../resolvers/authorization.resolver';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';


export const routes = [
  {
    path: '',
    component: LoginPageComponent,
    canActivate: [AuthorizationResolver]
    
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
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    LoadingBarModule
  ],
  providers: [
    AuthorizationResolver
  ]
})
export class LoginPageModule { }
