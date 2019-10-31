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

  public user: User[]
  private usersRoute = 'http://localhost:8080/api/users'; 

  // + "?deleted=false&userId=" + this.token
  getUser(){
    this.http.get<User[]>(this.usersRoute).subscribe(user => {
      this.user = user.filter(users => users.deleted == false && users.userId == this.token);
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
