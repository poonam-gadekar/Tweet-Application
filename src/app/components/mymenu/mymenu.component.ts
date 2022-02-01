import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mymenu',
  templateUrl: './mymenu.component.html',
  styleUrls: ['./mymenu.component.css']
})
export class MymenuComponent implements OnInit {
  isLogout=false
  constructor() { }

  ngOnInit(): void {
    this.isLogout=true
  }

}
