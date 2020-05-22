import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { NoRequestPageDirective } from './directives/no-request-page.directive';


@NgModule({
  declarations: [SharedHeaderComponent, NoRequestPageDirective],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [SharedHeaderComponent,NoRequestPageDirective,
    MatToolbarModule,
    MatIconModule,]
})
export class SharedModule { }
