import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url : string = "http://localhost:3004/"
  constructor(private http : HttpClient) { }
  getUser(){
    return this.http.get(this.url) 
  }

  getUserById(email: any,password: any){
    return this.http.get(this.url+'users/?email='+ email+ '&password='+ password) 
  }
  getTweetByUserId(userid: any){
    console.log("tsting tweets")
    return this.http.get(this.url+'tweets?userid='+userid) 
  }

  getAllTweets(userid: any){
    console.log("tsting tweets")
    return this.http.get(this.url+'tweets')
  }
  setPassword(email: any,user: any){
    console.log("tsting tweets")

    return this.http.patch(this.url+'users?email='+email,user)
  }

  getAllUser(user: any){
    return this.http.get(this.url+'users')
  }

  postUser(user: any){
    console.log("Test" + user)
    return this.http.post(this.url+'users/',user);
  }
 
  posttweet(tweet: any){
    console.log("test" +tweet)
    return this.http.post(this.url+'tweets/',tweet)
  }
}
