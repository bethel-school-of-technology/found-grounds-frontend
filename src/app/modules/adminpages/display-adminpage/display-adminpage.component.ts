import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TokenService } from '../../../shared/services/token.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-display-adminpage',
  templateUrl: './display-adminpage.component.html',
  styleUrls: ['./display-adminpage.component.css']
})
export class DisplayAdminpageComponent implements OnInit {
  public token
  public CurrentDate = moment();
  public FromNow = moment("2019-10-11 15:00:00").fromNow()
  
  constructor(tokenService: TokenService, private http: HttpClient) { 
    this.token = tokenService.token
  }

  public user
  private usersRoute = 'http://localhost:3000/users'; 
  getUser(){
    this.http.get<User>(this.usersRoute + "?deleted=false&userId=" + this.token).subscribe(user => {
      this.user = user;
    })
  }

  ngOnInit() {
   this.getUser();
  }

}
