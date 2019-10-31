import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/models/user';
import { FakeJWT } from 'src/app/shared/models/fakeJWT';

@Component({
  selector: 'app-display-deletecontentpage',
  templateUrl: './display-deletecontentpage.component.html',
  styleUrls: ['./display-deletecontentpage.component.css']
})
export class DisplayDeletecontentpageComponent implements OnInit {


  public token
  
  constructor( private http: HttpClient) { 
  }

  getTokenService(){
    this.http.get<FakeJWT[]>('http://localhost:3000/token').subscribe(token => {
      this.token = token;
    })
  }


  ngOnInit() {
    this.getTokenService();
  }

}
