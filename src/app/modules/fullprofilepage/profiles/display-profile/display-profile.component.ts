import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../../../shared/models/account';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css']
})
export class DisplayProfileComponent implements OnInit {
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
