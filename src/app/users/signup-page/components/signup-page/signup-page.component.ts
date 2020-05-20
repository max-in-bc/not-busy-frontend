import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[\.][a-zA-Z0-9]*[a-zA-Z0-9-.]*[a-zA-Z0-9]+$')]),

  });
  p_form: FormGroup = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password_confirm: new FormControl('', [Validators.required, (control => this.confirmPassword(control, this.p_form, 'password'))])

  });
  signup_failed: boolean = false;
  constructor() { }
  
  confirmPassword(control: any, group: FormGroup, matchPassword: string) {
      if (control.value &&  group.controls[matchPassword].value !== null && group.controls[matchPassword].value === control.value) {
          return null;
      }
      return { 'mismatch': true }
  }
  ngOnInit(): void {
  }

  onSubmit(){

  }

}
