import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginPageService } from '../services/login-page.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
  constructor(private loginServ: LoginPageService, private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    this.loginServ.signInWithEmailAndPassword(this.form.controls['email'].value, this.form.controls['password'].value).then(async (user_data: {userId: string, accessToken: string, refreshToken: string}) => {
      console.log(user_data);
      let user = await this.authServ.setUser(user_data);
      this.router.navigate(['/user/' +  user._id]);
    });
  }
}
