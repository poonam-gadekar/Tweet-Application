import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
