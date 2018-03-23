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

  entry = <any> {
    accomplishments : ['', '', ''],
    learn : ['', '', '']
  }

  baseUrl = environment.apiBase;
  
  saveError: any;
  updatedEvening                 : Object = {};
  updatedEveningAccomplishments  : Array<String>  = [];
  updatedEveningLearn            : Array<String>  = [];
  updatedEveningDifferent        : String = '';
  updatedEveningRating           : Number = null;
  updatedEveningImage            : String = '';
  updatedEveningWord             : String = '';
  updatedEveningDate             : String = '';

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
    this.updatedEveningAccomplishments[0]   = formInfo.eveningAccomplishments0.value;
    this.updatedEveningAccomplishments[1]   = formInfo.eveningAccomplishments1.value;
    this.updatedEveningAccomplishments[2]   = formInfo.eveningAccomplishments2.value;
    this.updatedEveningLearn[0]             = formInfo.eveningLearn0.value;
    this.updatedEveningLearn[1]             = formInfo.eveningLearn1.value;
    this.updatedEveningLearn[2]             = formInfo.eveningLearn2.value;
    this.updatedEveningDifferent            = formInfo.eveningDifferent.value;
    this.updatedEveningRating               = formInfo.eveningRating.value;
    this.updatedEveningImage                = formInfo.eveningImage.value;
    this.updatedEveningWord                 = formInfo.eveningWord.value;
    this.updatedEveningDate                 = formInfo.eveningDate.value;
    this.sendUpdatesToApi(id)
  }

  sendUpdatesToApi(id){
    this.updatedEvening = {
        eveningAccomplishments : this.updatedEveningAccomplishments,
        eveningLearn           : this.updatedEveningLearn,
        eveningDifferent       : this.updatedEveningDifferent,
        eveningRating          : this.updatedEveningRating,
        eveningImage           : this.updatedEveningImage,
        eveningWord            : this.updatedEveningWord,
        eveningDate            : this.updatedEveningDate
    }
    this.myDashboardService.updateEvening(id, this.updatedEvening)
    .toPromise()
    .then( res=>{
      this.myRouter.navigate(['/dashboard'])
    })
    .catch( err => {
      console.log("Error in the update:", err)
    })
  }

  deleteThisEvening(){
    if (!confirm("Are you sure?")) {
      return;
    }
    this.myDashboardService.deleteEvening(this.entry._id)
      .then( res => {
        this.myRouter.navigate(['/dashboard'])
      })
      .catch( err => {
        console.log("Error in deleting:", err)
      })
  } 

}
