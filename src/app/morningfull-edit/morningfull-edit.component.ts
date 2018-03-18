import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { AuthService } from "../services/auth.service";
import { DashboardService } from "../services/dashboard.service";
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-morningfull-edit',
  templateUrl: './morningfull-edit.component.html',
  styleUrls: ['./morningfull-edit.component.css']
})
export class MorningfullEditComponent implements OnInit {

  entry = <any>{}

  baseUrl = environment.apiBase;
  
  updatedMorning          : Object = {};
  updatedMorningGrateful  : Array = ['', '', ''];
  updatedMorningTasks     : Array = ['', '', ''];
  updatedMorningPhotoUrl  : String = '';
  updatedMorningWord      : String = '';


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

  doTheUpdate(id, formData){
    this.myDashboardService.updateMorning(id, formData)
    console.log("formData",formData)
    
    const formInfo = formData.form.controls;
    this.updatedMorningGrateful[0]   = formInfo.morningGrateful1.value;
    this.updatedMorningGrateful[1]   = formInfo.morningGrateful2.value;
    this.updatedMorningGrateful[2]   = formInfo.morningGrateful3.value;
    this.updatedMorningTasks      = formInfo.morningTasks.value;
    this.updatedMorningPhotoUrl   = formInfo.morningPhotoUrl.value;
    this.updatedMorningWord       = formInfo.morningWord.value
    this.sendUpdatesToApi(id)
  }
  
  sendUpdatesToApi(id){
    this.updatedMorningfull = {
        morningGrateful : this.updatedMorningGrateful,
        morningTasks     : this.updatedMorningTasks,
        morningPhotoUrl  : this.updatedMorningPhotoUrl
        morningWord      : this.updatedMorningWord
      }
      this.myDashboardService.updateMorning(id, this.updatedMorningfull)
      .toPromise()
      .then( res=>{
        this.myRouter.navigate(['/dashboard'])
      })
      .catch( err => {
        console.log("Error in the update:", err)
      } )
  }
}
