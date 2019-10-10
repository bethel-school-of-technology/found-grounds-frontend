import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../../../shared/models/account';

@Component({
  selector: 'app-display-account',
  templateUrl: './display-account.component.html',
  styleUrls: ['./display-account.component.css']
})
export class DisplayAccountComponent implements OnInit {
  @Input() userId: number;
  private accountsRoute = 'http://localhost:3000/accounts'; 
  public account: Account;

  constructor(private http: HttpClient) { }
  getAccount(userId){
    this.http.get<Account>(this.accountsRoute + "?userId=" + userId).subscribe(account => {
      this.account = account;
      console.log("the moment of revealing..");
      console.log(this.account);
    })
  }
  ngOnInit() {
    this.getAccount(this.userId);
  };
}