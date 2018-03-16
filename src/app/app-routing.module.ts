import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MorningfullDetailsComponent } from "./morningfull-details/morningfull-details.component";
import { EveningfullDetailsComponent } from "./eveningfull-details/eveningfull-details.component";
import { NewMorningfullComponent } from "./new-morningfull/new-morningfull.component";
import { NewEveningfullComponent } from "./new-eveningfull/new-eveningfull.component";

const routes: Routes = [
  // Make sure no leading dash
  // WILL NEED A HOMEPAGE COMPONENT EVENTUALLY
  {
    path: 'signup',      
    component: SignupComponent
  },
  {
    path: 'login',       
    component: LoginComponent
  },
  {
    path: 'dashboard',   
    component: DashboardComponent,
  },
  {
    path: "dashboard/morningfull/:id",  
    component: MorningfullDetailsComponent
  },
  {
    path: "dashboard/eveningfull/:id",  
    component: EveningfullDetailsComponent
  },
  {
    path: "dashboard/newmorningfull",  
    component: NewMorningfullComponent,
  },
  {
    path: "dashboard/neweveningfull",  
    component: NewEveningfullComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}