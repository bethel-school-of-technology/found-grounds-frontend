import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../../../shared/models/account';

@Component({
  selector: 'app-display-profilepage-profile',
  templateUrl: './display-profilepage-profile.component.html',
  styleUrls: ['./display-profilepage-profile.component.css']
})
export class DisplayProfilepageProfileComponent implements OnInit {
  private accountRoute = 'http://localhost:3000/accounts';
  public account: Account[];
  @Input() username: string;

  constructor(private http: HttpClient) { }
  getAccount(){
    this.http.get<Account[]>(this.accountRoute + "?username=" + this.username).subscribe(account => {
      this.account = account;
    });
  }
  ngOnInit() {
    this.getAccount();
    console.log(this.username);
  }

}
