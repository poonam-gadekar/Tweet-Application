import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user: any;
  constructor(private sr:UserService,private rt:Router) { }
  signupForm = new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl(''),
    dob:new FormControl(''),
    gender: new FormControl('Male'),
    password: new FormControl('')
  });

  ngOnInit(): void {
  }
  signup()
{
console.log("Signup call")



this.sr.postUser(this.signupForm.value).subscribe
     (
       (response)=>
       {
         console.log("Test"+ response)
        this.rt.navigate(['/login']);
       },
       (error) => console.log(error)
     )

}
}