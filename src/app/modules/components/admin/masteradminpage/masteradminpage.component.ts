import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FakeJWT } from 'src/app/shared/models/fakeJWT';
import { User } from 'src/app/shared/models/user';
import { Shop } from 'src/app/shared/models/shop';

@Component({
  selector: 'app-masteradminpage',
  templateUrl: './masteradminpage.component.html',
  styleUrls: ['./masteradminpage.component.css']
})
export class MasteradminpageComponent implements OnInit {

  constructor(private http: HttpClient) { 
 
  }

@Input() token;
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
   this.getUser();
   this.getShop();
  }

}
