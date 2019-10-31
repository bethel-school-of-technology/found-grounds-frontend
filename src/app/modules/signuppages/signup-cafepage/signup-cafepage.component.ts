import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/models/user';
import { FakeJWT } from 'src/app/shared/models/fakeJWT';

@Component({
  selector: 'app-signup-cafepage',
  templateUrl: './signup-cafepage.component.html',
  styleUrls: ['./signup-cafepage.component.css']
})
export class SignupCafepageComponent implements OnInit {
  public token;

  constructor(private http: HttpClient) { 
  }

  getTokenService(){
    this.http.get<FakeJWT[]>('http://localhost:3000/token').subscribe(token => {
      this.token = token;
    })
  }
  
  
  public user: User[]
  private usersRoute = 'http://localhost:8080/api/users'; 


  showAddBox(){
    var x = document.getElementById("newMenu");
    x.style.display = 'block';
  }

  closeAddBox(){
    var x = document.getElementById("newMenu");
    x.style.display = 'none';
  }

  ngOnInit() {
    this.getTokenService();
  }

}
