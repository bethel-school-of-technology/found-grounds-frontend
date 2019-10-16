import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-profilepage',
  templateUrl: './display-profilepage.component.html',
  styleUrls: ['./display-profilepage.component.css']
})
export class DisplayProfilepageComponent implements OnInit {
  userId=1
  public username;
  public account: Account;
  private accountRoute = 'http://localhost:3000/accounts';

  constructor( private route: ActivatedRoute, private http: HttpClient) { }
  getAccount(){
    this.http.get<Account>(this.accountRoute + "?username=" + this.username).subscribe(account => {
      this.account = account;
    });
  }

  
  ngOnInit() {
    let username= this.route.snapshot.paramMap.get('username')
    this.username = username;
    this.getAccount();
  }

}
