import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posttweet',
  templateUrl: './posttweet.component.html',
  styleUrls: ['./posttweet.component.css']
})
export class PosttweetComponent implements OnInit {
tweet: any;
  constructor(private sr:UserService) { }
  posttweetForm = new FormGroup({
    posttweet: new FormControl('')
    
  });

  ngOnInit(): void {
  }
  post(){
    console.log("post tweet call")
    this.tweet={
      "userid": sessionStorage.getItem('email'),
 
      "posttweet": this.posttweetForm.value.posttweet
    }
    this.sr.posttweet(this.tweet).subscribe(
      (response)=>
       {
         console.log("Test"+ response)
         alert("post tweet sussfully")
       },
       (error) => console.log(error)
    )
  }

}
