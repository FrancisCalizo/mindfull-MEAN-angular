import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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
  entries: any;
  currentUser: string;

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
        this.getThePhones()
      })

      // Even if you don't do anything on error, catch to avoid a console error.
      .catch(err => {
        console.log(err);
        this.myRouter.navigate(["/"]);
      });
    // this.getThePhones();
  }

  getThePhones() {
    this.myDashboardService.retrieveEntries()
    .subscribe(allThePhones => {
      // console.log("allThePhones: ", allThePhones)
        this.entries = allThePhones;
        console.log("phones", this.entries)
      },
      () => {
        this.entryListError = "Sorry, no phones.";
      }
    );
  } // close getThePhones()

  logMeOutPls() {
    this.myAuthService
      .logout()
      .then(() => {
        this.myRouter.navigate(["/"]);
      })
      .catch(() => {
        this.logoutError = "Log out went bad.";
      });
  } // close logMeOutPls()
}
