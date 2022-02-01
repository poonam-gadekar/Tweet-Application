import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: any;
user: any;
users: any;
username: string = "";

  
  constructor(private rt:Router, private sr:UserService) {
   this.sr
  }

  
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  checkCredentials(){
   console.log("test")
 
   this.sr.getUserById(this.profileForm.value.username,this.profileForm.value.password).subscribe
     (
       (response)=>
       {
         this.users=response
         if(this.users.length !=0){
         this.user=response;
        
        sessionStorage.setItem('email',this.user[0].email)
       let username = sessionStorage.getItem('email')
         console.log("Test"+ response)
        this.rt.navigate(['/menu/viewalltweets']);
    }else{
      console.log("Invalid details")
      alert("Incorrect username password")
    }
       },
       (error) => console.log(error)
     )
   
   this.user={
     name: this.profileForm.value.username,
     password: this.profileForm.value.password
   }
   
 
  }














  ngOnInit(): void {

    /*this.sr.getUser().subscribe
     (
       (response)=>
       {
         console.log("Test"+ response)
       },
       (error) => console.log(error)
     )*/

     
     /*this.sr.postUser(this.user).subscribe
     (
       (response)=>
       {
         console.log("Test"+ response)
       },
       (error) => console.log(error)
     )*/
    
 }

 
}
