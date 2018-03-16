import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MorningfullDetailsComponent } from "./morningfull-details/morningfull-details.component";

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
    component: DashboardComponent
  },
  {
    path: "dashboard/morningfull/:id",  
    component: MorningfullDetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}