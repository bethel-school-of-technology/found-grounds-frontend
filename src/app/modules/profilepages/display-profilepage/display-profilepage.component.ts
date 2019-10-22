import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-profilepage',
  templateUrl: './display-profilepage.component.html',
  styleUrls: ['./display-profilepage.component.css']
})
export class DisplayProfilepageComponent implements OnInit {
  token=1
  public param;
  public account: Account;
  private accountRoute = 'http://localhost:3000/accounts';

  constructor( private route: ActivatedRoute, private http: HttpClient) { }
  getAccount(username){
    this.http.get<Account>(this.accountRoute + "?deleted=false&username=" + username).subscribe(account => {
      this.account = account;
    });
  }

  
  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('username')
    this.getAccount(param);
  }

}
