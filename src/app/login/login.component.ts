import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLoggedOut: boolean = true;

  loginInfo = {
    username: "",
    password: ""
  };

  loginErrorMessage: string;

  constructor(private myAuthService: AuthService, private myRouter: Router) {}

  ngOnInit() {
      this.myAuthService
        .login(this.loginInfo)
        // If success, we are logged in.
        .then(resultFromApi => {
          this.myRouter.navigate(["/"]);
        })

        // Even if you don't do anything on error, catch to avoid a console error.
        .catch(err => {
          console.log(err);
        });
  }

 doLogin() {
    this.myAuthService.login(this.loginInfo)
      .then((resultFromApi) => {
          // clear the form
          this.loginInfo = {
            username: '',
            password: ''
          };

          // clear the error message
          this.loginErrorMessage = "";

          // redirect to User Dashboard
          this.myRouter.navigate(['/dashboard']);

          // For Logout Testing
          this.isLoggedOut = !this.isLoggedOut;
          console.log(`Success Homie, isLogged out is ${this.isLoggedOut}`);


      })
      .catch((err) => {
          const parsedError = err.json();
          this.loginErrorMessage = parsedError.message;
      }); 
      
  }
}
