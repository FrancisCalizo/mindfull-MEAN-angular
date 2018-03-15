import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupInfo = {
    username: "",
    password: ""
  };

  throwError: String;

  constructor( private myAuth: AuthService, private myRouter: Router) { }

  ngOnInit() {}

  doSignUp(){
    this.myAuth
      .signup(this.signupInfo)
      .then(resultFromApi => {
        // Clear Form
        this.signupInfo = { username: "", password: ""};

        // Clear Error Message
        this.throwError = "";

        // Redirect to /something
        this.myRouter.navigate(['/blahblah']);
      })
      .catch(err => {
        const parsedError = err.json();
        this.throwError = parsedError.message + " sad boiz"
      });
  } // Close doSignup()
}
