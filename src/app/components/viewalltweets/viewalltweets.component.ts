import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewalltweets',
  templateUrl: './viewalltweets.component.html',
  styleUrls: ['./viewalltweets.component.css']
})
export class ViewalltweetsComponent implements OnInit {
  userid: any;
  tweets: any;
  constructor(private sr:UserService) { }

  ngOnInit(): void {

    this.sr.getAllTweets(this.userid).subscribe

    (
      (response)=>
      {
        this.tweets=response;
        console.log("Test"+ response)
      },
      (error) => console.log(error)
    )
  }


}
