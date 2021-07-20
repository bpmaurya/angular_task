import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../home/user.model';
import { UserService } from '../home/user.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {
  winnerUsers: User[]=[];
  isLoading=false;
  constructor(public http:HttpClient,private userService:UserService) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.userService.fetchWinner().subscribe(user => {
      this.winnerUsers = user;
      this.isLoading=false;
    })
  }

}
