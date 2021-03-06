import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/models/user';
import { Shop } from 'src/app/shared/models/shop';
import { FakeJWT } from 'src/app/shared/models/fakeJWT';

@Component({
  selector: 'app-display-adminpage',
  templateUrl: './display-adminpage.component.html',
  styleUrls: ['./display-adminpage.component.css']
})
export class DisplayAdminpageComponent implements OnInit {
  public token
  public CurrentDate = moment();
  public FromNow = moment("2019-10-11 15:00:00").fromNow()
  
  constructor(private http: HttpClient) { 
 
  }

  getTokenService(){
    this.http.get<FakeJWT[]>('http://localhost:3000/token').subscribe(token => {
      this.token = token;
    })
  }

  public user: User []
  private usersRoute = 'http://localhost:8080/api/users'; 
  //  + "?deleted=false&userId=" + this.token
  getUser(){
    this.http.get<User[]>(this.usersRoute).subscribe(user => {
      this.user = user.filter(user => user.deleted == false && user.userId == this.token);
    })
  }

  public shop: Shop []
  private shopsRoute = 'http://localhost:8080/api/shops'; 
  getShop(){
    this.http.get<Shop[]>(this.shopsRoute).subscribe(shop => {
      this.shop = shop.filter(shop => shop.deleted == false && shop.adminId == this.token);
    })
  }

  ngOnInit() {
    this.getTokenService();
   this.getUser();
   this.getShop();
  }

}
