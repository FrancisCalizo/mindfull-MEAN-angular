import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
// import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  // Make sure no leading dash
  {path: 'signup', component: SignupComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'phones', component: PhonesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}