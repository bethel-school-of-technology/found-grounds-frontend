import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../../../shared/models/account';

@Component({
  selector: 'app-display-profile-picture',
  templateUrl: './display-profile-picture.component.html',
  styleUrls: ['./display-profile-picture.component.css']
})
export class DisplayProfilePictureComponent implements OnInit {
  @Input() userId: number;
  private accountsRoute = 'http://localhost:3000/accounts'; 
  public account: Account;

  constructor(private http: HttpClient) { }
  getAccount(userId){
    this.http.get<Account>(this.accountsRoute + "?userId=" + userId).subscribe(account => {
      this.account = account;
    })
  }
  ngOnInit() {
    this.getAccount(this.userId);
  };
}
