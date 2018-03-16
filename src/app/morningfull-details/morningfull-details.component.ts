import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { AuthService } from "../services/auth.service";
import { DashboardService } from "../services/dashboard.service";
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-morningfull-details',
  templateUrl: './morningfull-details.component.html',
  styleUrls: ['./morningfull-details.component.css']
})
export class MorningfullDetailsComponent implements OnInit {
  entry = <any>{}

  baseUrl = environment.apiBase;

  constructor(
    private myDashboardService: DashboardService,
    private myAuthService: AuthService,
    private myRoute: ActivatedRoute,
    private myRouter: Router
  ) {}

  ngOnInit() {
    this.myAuthService
      .checklogin()
      // If success, we are logged in.
      .then()
      // Even if you don't do anything on error,
      // catch to avoid a console error.
      .catch(err => {
        console.log(err);
        this.myRouter.navigate(["/"]);
      });
    this.myRoute.params.subscribe(params => {
      this.getMorningDetails(params["id"]);
    });
  }

  getMorningDetails(id){
    this.myDashboardService.getMorningId(id)
      .then( res => {
          this.entry = res;
          console.log("Morning Entry details: ", this.entry)
      } )
      .catch()
  }

  deleteThisMorning(){
    if (!confirm("Are you sure?")) {
      return;
    }
    this.myDashboardService.deleteMorning(this.entry._id)
      .then( res => {
        this.myRouter.navigate(['/dashboard'])
      })
      .catch( err => {
        console.log("Error in deleting:", err)
      })
  } 
}
