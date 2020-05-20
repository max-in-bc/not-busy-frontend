import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[\.][a-zA-Z0-9]*[a-zA-Z0-9-.]*[a-zA-Z0-9]+$')]),
    password: new FormControl('', [Validators.required])
  });
  login_failed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }
}
