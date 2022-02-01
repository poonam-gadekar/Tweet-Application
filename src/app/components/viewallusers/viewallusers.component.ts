import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent implements OnInit {
user: any;
users: any;
  constructor(private sr:UserService) { }

  ngOnInit(): void {
    this.sr.getAllUser(this.user).subscribe(

      (response)=>
      {
        this.users =response;
        console.log("Test"+ response)
      },
      (error) => console.log(error)

    )
  }

}
