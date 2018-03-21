import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { DashboardService } from "../services/dashboard.service";
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  logoutError: string;
  entryListError: string;
  entries: Object[];
  currentUser: Object = {};
  photo: string = 'https://llandscapes-ee1.kxcdn.com/wp-content/uploads/2015/01/6198521760_aa86027669_z.jpg';

  constructor(
    private myAuthService: AuthService,
    private myRouter: Router,
    private myDashboardService: DashboardService
    ) {}

  ngOnInit() {
    this.myAuthService
      .checklogin()
      // If success, we are logged in.
      .then(resultFromApi => {
        this.currentUser = resultFromApi;
        console.log("user is: ", resultFromApi);
        this.getEntries()
      })

      // Even if you don't do anything on error, catch to avoid a console error.
      .catch(err => {
        console.log(err);
        this.myRouter.navigate(["/"]);
      });
    // this.getEntries();
  }



  getEntries() {
    this.myDashboardService.retrieveEntries()
    .subscribe(allEntries => {
      // console.log("allEntries: ", allEntries)
        this.entries = allEntries;
        console.log("entries", this.entries)
      },
      () => {
        this.entryListError = "Sorry, no entries.";
      }
    );
  } // close getEntries()

  logMeOut() {
    this.myAuthService
      .logout()
      .then(() => {
        this.myRouter.navigate(["/"]);
      })
      .catch(() => {
        this.logoutError = "Log out went bad.";
      });
  } // close logMeOut()
}
