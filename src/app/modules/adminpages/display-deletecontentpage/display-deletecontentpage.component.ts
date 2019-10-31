import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../shared/services/token.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-display-deletecontentpage',
  templateUrl: './display-deletecontentpage.component.html',
  styleUrls: ['./display-deletecontentpage.component.css']
})
export class DisplayDeletecontentpageComponent implements OnInit {


  public token
  
  constructor(tokenService: TokenService, private http: HttpClient) { 
    this.token = tokenService.token
  }

  public user: User []
  private usersRoute = 'http://localhost:8080/api/users'; 

  // + "?deleted=false&userId=" + this.token
  getUser(){
    this.http.get<User[]>(this.usersRoute).subscribe(user => {
      this.user = user.filter(users => users.deleted == false && users.userId == this.token);
    })
  }

  ngOnInit() {
   this.getUser();
  }

}
