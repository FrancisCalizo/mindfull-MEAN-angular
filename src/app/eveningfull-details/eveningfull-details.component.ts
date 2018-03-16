import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { AuthService } from "../services/auth.service";
import { DashboardService } from "../services/dashboard.service";
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-eveningfull-details',
  templateUrl: './eveningfull-details.component.html',
  styleUrls: ['./eveningfull-details.component.css']
})
export class EveningfullDetailsComponent implements OnInit {
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
      this.getEveningDetails(params["id"]);
    });
  }

  getEveningDetails(id){
    this.myDashboardService.getEveningId(id)
      .then( res => {
          this.entry = res;
          console.log("Evening Entry details: ", this.entry)
      } )
      .catch()
  }
}
