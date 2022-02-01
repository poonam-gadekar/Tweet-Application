import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { SignupComponent } from './components/signup/signup.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { MymenuComponent } from './components/mymenu/mymenu.component';
import { PosttweetComponent } from './components/posttweet/posttweet.component';
import { ViewmytweetsComponent } from './components/viewmytweets/viewmytweets.component';
import { ViewalltweetsComponent } from './components/viewalltweets/viewalltweets.component';
import { ViewallusersComponent } from './components/viewallusers/viewallusers.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    SignupComponent,
    ForgotpasswordComponent,
    MymenuComponent,
    PosttweetComponent,
    ViewmytweetsComponent,
    ViewalltweetsComponent,
    ViewallusersComponent,
    HomeComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
