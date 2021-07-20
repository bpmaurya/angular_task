

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

import { User } from './user.model';
import { UserService } from './user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loadedUsers: User[]=[];
  winnerUsers: User[]=[];
  isLoading=false;
  constructor(public http:HttpClient,private userService:UserService) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.userService.fetchUser().subscribe(user => {
      this.isLoading = false;
      this.loadedUsers = user;
    });

    this.userService.fetchWinner().subscribe(user => {
      this.winnerUsers = user;
    })

  }


  onSubmit(userData: User){
   this.userService.createUser(userData.name,userData.age,userData.score)
  }

  fetchUser(){
    this.isLoading=true;
    this.userService.fetchUser().subscribe(user => {
      this.isLoading = false;
      this.loadedUsers = user;
    });

  }

  addWinner(name:string){
    let winner = this.loadedUsers.find(e => e.name === name);
    if(winner!=undefined){
      this.userService.createWinner(winner.name, winner.age, winner.score)
    }

    console.log(winner)

  }
  checkIfExists(name: string){
       return this.winnerUsers.find(e => e.name === name)
  }

  applyFilter(e: any){
     console.log(e.target.value)
     let filterValue = e.target.value;
      filterValue = filterValue.trim();
     filterValue = filterValue.toLowerCase();
     this.loadedUsers.filter = filterValue;
     console.log(this);
  }


}
