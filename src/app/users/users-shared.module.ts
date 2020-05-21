import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,

    FormsModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [    
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule]
})
export class UsersSharedModule { }
