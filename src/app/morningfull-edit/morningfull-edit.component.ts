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

  entry = <any> {
    grateful : ['', '', ''],
    tasks    : ['', '', '']
  }

  baseUrl = environment.apiBase;
  
  updatedMorning          : Object = {};
  updatedMorningGrateful  : Array<String> = ['', '', ''];
  updatedMorningTasks     : Array<String> = ['', '', ''];
  updatedMorningPhotoUrl  : String = '';
  updatedMorningWord      : String = '';
  updatedMorningDate      : String = '';
  saveError: any;

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
    this.updatedMorningGrateful[0]   = formInfo.morningGrateful0.value;
    this.updatedMorningGrateful[1]   = formInfo.morningGrateful1.value;
    this.updatedMorningGrateful[2]   = formInfo.morningGrateful2.value;
    this.updatedMorningTasks[0]      = formInfo.morningTasks0.value;
    this.updatedMorningTasks[1]      = formInfo.morningTasks1.value;
    this.updatedMorningTasks[2]      = formInfo.morningTasks2.value;
    this.updatedMorningPhotoUrl      = formInfo.morningPhotoUrl.value;
    this.updatedMorningWord          = formInfo.morningWord.value
    this.updatedMorningDate          = formInfo.morningDate.value
    this.sendUpdatesToApi(id)
  }
  
  sendUpdatesToApi(id){
    this.updatedMorning = {
        morningGrateful : this.updatedMorningGrateful,
        morningTasks     : this.updatedMorningTasks,
        morningPhotoUrl  : this.updatedMorningPhotoUrl,
        morningWord      : this.updatedMorningWord,
        morningDate      : this.updatedMorningDate
      }
      this.myDashboardService.updateMorning(id, this.updatedMorning)
      .toPromise()
      .then( res=>{
        this.myRouter.navigate(['/dashboard'])
      })
      .catch( err => {
        console.log("Error in the update:", err)
      } )
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
