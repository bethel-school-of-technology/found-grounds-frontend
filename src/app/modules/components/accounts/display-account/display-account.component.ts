import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../../../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-account',
  templateUrl: './display-account.component.html',
  styleUrls: ['./display-account.component.css']
})
export class DisplayAccountComponent implements OnInit {
  @Input() userId: number;
  private accountsRoute = 'http://localhost:3000/accounts'; 
  public account: Account;

  constructor(private http: HttpClient, private router: Router) { }
  getAccount(userId){
    this.http.get<Account>(this.accountsRoute + "?userId=" + userId).subscribe(account => {
      this.account = account;
    })
  }
  ngOnInit() {
    this.getAccount(this.userId);
  };

  onSelect(accoun){
    this.router.navigate(['/users', accoun.username]);
  }
}
