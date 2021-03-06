import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { AuthService } from '../services/auth.service';
// Navigates to another page - have to put into the constructor after
import { Router } from '@angular/router';
import { FileUploader } from "ng2-file-upload";
import { environment } from '../../environments/environment'


@Component({
  selector: 'app-new-eveningfull',
  templateUrl: './new-eveningfull.component.html',
  styleUrls: ['./new-eveningfull.component.css']
})
export class NewEveningfullComponent implements OnInit {

  eveningData = {
    eveningDate            : "",
    eveningAccomplishments : [],
    eveningLearn           : [],
    eveningDifferent       : "",
    eveningRating          : null,
    eveningWord            : ""
  }

  saveError: string;

    // FOR IMAGES!!!!
    myCoolUploader = new FileUploader({
      url: environment.apiBase + "/dashboard/eveningfull/new",
      itemAlias: "image"
    });

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

  saveEveningfull() {
    if (this.myCoolUploader.getNotUploadedItems().length === 0) {
      this.saveEveningfullNoImage();
    } else {
      this.saveEveningfullWithImage();
    }
  }

  saveEveningfullNoImage(){
    this.myDashboardService.createNewEvening(this.eveningData)
    .then( res => {
      // This clear the new phone after saving
      this.eveningData = { 
        eveningDate            : "",
        eveningAccomplishments : [],
        eveningLearn           : [],
        eveningDifferent       : "",
        eveningRating          : null,
        eveningWord            : ""
      }
      this.saveError = '';
      this.myRouter.navigate(['/dashboard'])
    })
    .catch( err => { this.saveError = "Something is wrong with saving"})
  }

  saveEveningfullWithImage(){
    this.myCoolUploader.onBuildItemForm = (item, form) => {
      form.append('eveningDate',            this.eveningData.eveningDate);
      form.append("eveningAccomplishments", this.eveningData.eveningAccomplishments[0]);
      form.append("eveningAccomplishments", this.eveningData.eveningAccomplishments[1]);
      form.append("eveningAccomplishments", this.eveningData.eveningAccomplishments[2]);
      form.append("eveningLearn",           this.eveningData.eveningLearn[0]);
      form.append("eveningLearn",           this.eveningData.eveningLearn[1]);
      form.append("eveningLearn",           this.eveningData.eveningLearn[2]);
      form.append("eveningDifferent",       this.eveningData.eveningDifferent);
      form.append("eveningRating",          this.eveningData.eveningRating);
      form.append("eveningWord",            this.eveningData.eveningWord);
    }
    this.myCoolUploader.onSuccessItem = (item, response) =>{
      this.eveningData = {
        eveningDate: "",
        eveningAccomplishments: [],
        eveningLearn: [],
        eveningDifferent: "",
        eveningRating: "",
        eveningWord: "",
        };
        this.saveError = ""
        this.myRouter.navigate(["/dashboard"]);
    }
    this.myCoolUploader.onErrorItem = (item, response) => {
      this.saveError = "Saving phone with image went bad. Sorry!";
    }
    this.myCoolUploader.uploadAll();
  }
}
