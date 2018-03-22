import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import 'rxjs/add/operator/toPromise'
import { environment } from "../../environments/environment"

@Injectable()
export class AuthService {

apiBase: 'http://localhost:3000'

 constructor(private http: Http) { }

 signup(authStuff) {
    return this.http.post(`${environment.apiBase}/signup`, 
    {
      signUpUsername: authStuff.username,
      signUpPassword: authStuff.password
    },
    // { withCredentials: true }
    ).toPromise()
    .then((res) => res.json());
  }

  login(authStuff) {
    return (
      this.http
        .post(
          `${environment.apiBase}/login`,

          // Form body information to send to the back end (req.body)
          {
            loginUsername: authStuff.username,
            loginPassword: authStuff.password
          },

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json())
    );
  } // close login()

  logout() {
    return (
      this.http
        .post(
          `${environment.apiBase}/logout`,

          // Nothing to send to the back end (req.body)
          {},

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json())
    );
  } // close logout()

  checklogin() {
    return (
      this.http
        .get(
          `${environment.apiBase}/checklogin`,

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json())
    );
  } // close checklogin()
}

