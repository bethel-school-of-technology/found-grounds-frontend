import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../../../shared/models/user';

@Component({
  selector: 'app-display-user-profile',
  templateUrl: './display-user-profile.component.html',
  styleUrls: ['./display-user-profile.component.css']
})
export class DisplayUserProfileComponent implements OnInit {
  private accountRoute = 'http://localhost:3000/accounts';
  public account: Account[];
  @Input() userId: number;

  constructor( private http: HttpClient) { }
  getAccount(){
    this.http.get<Account[]>(this.accountRoute + "?userId=" + this.userId).subscribe(account => {
      this.account = account;
    });
  }

  ngOnInit() {
    this.getAccount();
  }

}
