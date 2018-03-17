import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { AuthService } from "../services/auth.service";
import { DashboardService } from "../services/dashboard.service";
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-eveningfull-edit',
  templateUrl: './eveningfull-edit.component.html',
  styleUrls: ['./eveningfull-edit.component.css']
})
export class EveningfullEditComponent implements OnInit {

  entry = <any>{}

  baseUrl = environment.apiBase;
  
  updatedEvening                 : Object = {};
  updatedEveningAccomplishments  : Array  = [];
  updatedEveningLearn            : Array  = [];
  updatedEveningDifferent        : String = '';
  updatedEveningRating           : Number = null;
  updatedEveningPhotoPath        : String = '';
  updatedEveningWord             : String = '';

  constructor(
    private myDashboardService: DashboardService,
    private myAuthService: AuthService,
    private myRoute: ActivatedRoute,
    private myRouter: Router
  ) { }

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

  doTheUpdate(id, formData){
    this.myDashboardService.updateEvening(id, formData)
    console.log("formData",formData)
    
    const formInfo = formData.form.controls;
    this.updatedEveningAccomplishments   = formInfo.eveningAccomplishments.value;
    this.updatedEveningLearn             = formInfo.eveningLearn.value;
    this.updatedEveningDifferent         = formInfo.eveningDifferent.value;
    this.updatedEveningRating            = formInfo.eveningRating.value;
    this.updatedEveningPhotoPath         = formInfo.eveningPhotoPath.value;
    this.updatedEveningWord              = formInfo.eveningWord.value
    this.sendUpdatesToApi(id)
  }

  sendUpdatesToApi(id){
    this.updatedEveningfull = {
        eveningAccomplishments : this.updatedEveningAccomplishments,
        eveningLearn           : this.updatedEveningLearn,
        eveningDifferent       : this.updatedEveningDifferent
        eveningRating          : this.updatedEveningRating
        eveningPhotoPath       : this.updatedEveningPhotoPath
        eveningWord            : this.updatedEveningWord
    }
    this.myDashboardService.updateEvening(id, this.updatedEveningfull)
    .toPromise()
    .then( res=>{
      this.myRouter.navigate(['/dashboard'])
    })
    .catch( err => {
      console.log("Error in the update:", err)
    })
  }

}
