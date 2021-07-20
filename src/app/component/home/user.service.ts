import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user.model";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class UserService{

  constructor(private http:HttpClient){
  }
  createUser(name:string,age:number,score:number){
    const userData :User ={name:name,age:age,score:score}
    this.http.post<{ name: string }>('https://winner-45084-default-rtdb.firebaseio.com/users.json',
    userData).subscribe(
      response =>{
        console.log(response)
      }
    )
  }

  fetchUser(){
   return this.http.get<{[key: string]:User}>('https://winner-45084-default-rtdb.firebaseio.com/users.json')
    .pipe(map(responseData => {
      const userArray = [];
      for(const key in responseData) {
        if(responseData.hasOwnProperty(key)){
          userArray.push({...responseData[key],id:key});
        }
      }
      return userArray;
    }))
  }

  createWinner(name:string,age:number,score:number ){
    const winnerData : User ={name:name,age:age,score:score}
    return   this.http.post<{ name: string }>('https://winner-45084-default-rtdb.firebaseio.com/winners.json',
    winnerData).subscribe(
      response =>{
        console.log(response)
      }
    )
  }

  fetchWinner(){
    return this.http.get<{[key: string]:User}>('https://winner-45084-default-rtdb.firebaseio.com/winners.json')
    .pipe(map(responseData => {
      const userArray = [];
      for(const key in responseData) {
        if(responseData.hasOwnProperty(key)){
          userArray.push({...responseData[key],id:key});
        }
      }
      return userArray;
    }))
  }


}
