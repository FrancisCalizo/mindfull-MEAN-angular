import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Service & Stuff 
import { AuthService } from './services/auth.service';
import { DashboardService } from './services/dashboard.service';

// Components & Stuff
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MorningfullDetailsComponent } from './morningfull-details/morningfull-details.component';
import { EveningfullDetailsComponent } from './eveningfull-details/eveningfull-details.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    MorningfullDetailsComponent,
    EveningfullDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AuthService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
