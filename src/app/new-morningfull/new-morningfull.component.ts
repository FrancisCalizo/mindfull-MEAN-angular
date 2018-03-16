import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { AuthService } from '../services/auth.service';
// Navigates to another page - have to put into the constructor after
import { Router } from '@angular/router';
// import { FileUploader } from "ng2-file-upload";
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-new-morningfull',
  templateUrl: './new-morningfull.component.html',
  styleUrls: ['./new-morningfull.component.css']
})
export class NewMorningfullComponent implements OnInit {

  constructor( 
    private myDashboardService: DashboardService, 
    private myAuthService: AuthService,
    private myRouter: Router
  ) { }

  ngOnInit() {
    this.myAuthService
    .checklogin()
    // If Success, we are logged in.
    .then()

    // Even if you dont do anything on error, catch to avoid
    .catch(err => {
      console.log(err);
      this.myRouter.navigate(["/"]);
    });
  }

}
