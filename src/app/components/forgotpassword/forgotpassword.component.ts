import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
  
})
export class ForgotpasswordComponent implements OnInit {
userid: any;
user: any;
  constructor(private rt:Router,private sr:UserService) { }
  forgotPasswordForm = new FormGroup({
    email: new FormControl(''),
    newpassword:new FormControl('')
  });
  
  ngOnInit(): void {
  }
  setpassword(){
    console.log("set password call")

    this.sr.setPassword(this.forgotPasswordForm.value.email,this.forgotPasswordForm.value).subscribe(
      (response)=>
       {
         console.log("Test"+ response)
        this.rt.navigate(['/login']);
       },
       (error) => console.log(error)
    )
  }
}
