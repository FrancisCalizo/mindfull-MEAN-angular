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

  morningData = {
    date     : "",
    grateful : [],
    tasks    : [],
    photoUrl : "",
    word     : ""
  }

  saveError: string;

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

  saveMorningfull(){
    this.myDashboardService.createNewMorning(this.morningData)
      .then( res => {
        // This clear the new phone after saving
        this.morningData = { 
          date     : "",
          grateful : [],
          tasks    : [],
          photoUrl : "",
          word     : ""
        }
        this.saveError = '';
        this.myRouter.navigate(['/dashboard'])
  })
  .catch( err => { this.saveError = "Something is wrong with saving"})
  }
}
