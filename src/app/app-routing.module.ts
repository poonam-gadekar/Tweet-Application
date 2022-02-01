import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MymenuComponent } from './components/mymenu/mymenu.component';
import { PosttweetComponent } from './components/posttweet/posttweet.component';

import { SignupComponent } from './components/signup/signup.component';
import { ViewalltweetsComponent } from './components/viewalltweets/viewalltweets.component';
import { ViewallusersComponent } from './components/viewallusers/viewallusers.component';
import { ViewmytweetsComponent } from './components/viewmytweets/viewmytweets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'menu', component: MymenuComponent ,
  children: [
    {
      path: 'posttweet', // child route path
      component: PosttweetComponent, // child route component that the router renders
    },
    {
      path: 'viewalltweets',
      component: ViewalltweetsComponent, // another child route component that the router renders
    },
    { path: 'viewmytweets', component: ViewmytweetsComponent },
    { path: 'viewallusers', component: ViewallusersComponent }
  ],},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
