import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../shared/services/token.service';
import { HttpClient } from '@angular/common/http';
import { User }  from '../../../shared/models/user';

@Component({
  selector: 'app-display-restorecontentpage',
  templateUrl: './display-restorecontentpage.component.html',
  styleUrls: ['./display-restorecontentpage.component.css']
})
export class DisplayRestorecontentpageComponent implements OnInit {

  public token
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
 
