import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewmytweets',
  templateUrl: './viewmytweets.component.html',
  styleUrls: ['./viewmytweets.component.css']
})
export class ViewmytweetsComponent implements OnInit {
  userid: any;
  tweets: any
  constructor(private sr:UserService) { }

  ngOnInit(): void {
    //this.userid="poonam@gmail.com"
    let username = sessionStorage.getItem('email')
    this.sr.getTweetByUserId(username).subscribe
     (
       (response)=>
       {
         this.tweets=response
         console.log("Test"+ response)
       },
       (error) => console.log(error)
     )
  }

}
