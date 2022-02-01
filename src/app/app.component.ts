import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyApp';
  isLogout=false
  isSignup=false
  constructor(private rt:Router) {
    this.isLogout=false
    this.isSignup=false
   }
  ngOnInit(): void {
    console.log('Tes.............')
    this.isLogout=false
    this.isSignup=false
  }
  login(){
    console.log('login')
    this.isLogout=true
    this.isSignup=true
   this.rt.navigate(['/login']);
  }

  signup(){
    console.log('login')
   this.isSignup=true
   this.isLogout=true
   this.rt.navigate(['/signup']);
  }
}
