import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupPageService } from '../services/signup-page.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
  constructor(private signupServ: SignupPageService, private authServ: AuthService, private router: Router) { }
  
  confirmPassword(control: any, group: FormGroup, matchPassword: string) {
      if (control.value &&  group.controls[matchPassword].value !== null && group.controls[matchPassword].value === control.value) {
          return null;
      }
      return { 'mismatch': true }
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.signupServ.signUpWithEmailAndPassword(this.form.controls['email'].value, this.p_form.controls['password'].value).then(async (user_data: {userId: string, accessToken: string, refreshToken: string}) => {
      console.log(user_data);
      let user = await this.authServ.setUser(user_data);
      this.router.navigate(['/user/' +  user._id]);
    });
  }

}
