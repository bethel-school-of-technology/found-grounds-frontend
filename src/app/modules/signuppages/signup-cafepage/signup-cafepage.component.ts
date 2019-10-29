import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TokenService } from '../../../shared/services/token.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-signup-cafepage',
  templateUrl: './signup-cafepage.component.html',
  styleUrls: ['./signup-cafepage.component.css']
})
export class SignupCafepageComponent implements OnInit {
  public token;

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

  showAddBox(){
    var x = document.getElementById("newMenu");
    x.style.display = 'block';
  }

  closeAddBox(){
    var x = document.getElementById("newMenu");
    x.style.display = 'none';
  }

  ngOnInit() {
   this.getUser();
  }

}
