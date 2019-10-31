import { Component, OnInit } from '@angular/core';
import { FakeJWT } from 'src/app/shared/models/fakeJWT';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-dailybrew-page',
  templateUrl: './display-dailybrew-page.component.html',
  styleUrls: ['./display-dailybrew-page.component.css']
})
export class DisplayDailybrewPageComponent implements OnInit {
    // pulls in userId from login token
  // @Input() userId: number;
  public token
  
  constructor( private http: HttpClient) { }
 
  getTokenService(){
    this.http.get<FakeJWT[]>('http://localhost:3000/token').subscribe(token => {
      this.token = token;
    })
  }

  ngOnInit() {
    this.getTokenService()
  }

}
