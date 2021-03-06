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
import { NewMorningfullComponent } from './new-morningfull/new-morningfull.component';
import { NewEveningfullComponent } from './new-eveningfull/new-eveningfull.component';
import { MorningfullEditComponent } from './morningfull-edit/morningfull-edit.component';
import { EveningfullEditComponent } from './eveningfull-edit/eveningfull-edit.component';
import { HomepageComponent } from './homepage/homepage.component';

// For Image Upload
import { FileUploadModule } from "ng2-file-upload";



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    MorningfullDetailsComponent,
    EveningfullDetailsComponent,
    NewMorningfullComponent,
    NewEveningfullComponent,
    MorningfullEditComponent,
    EveningfullEditComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [
    AuthService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
