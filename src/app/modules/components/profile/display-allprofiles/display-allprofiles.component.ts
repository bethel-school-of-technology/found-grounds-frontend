import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../../../shared/models/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-allprofiles',
  templateUrl: './display-allprofiles.component.html',
  styleUrls: ['./display-allprofiles.component.css']
})
export class DisplayAllprofilesComponent implements OnInit {
  private accountRoute = 'http://localhost:3000/accounts';
  public account: Account[];
  
  constructor(private http: HttpClient, private router: Router) { }

  getAccount(){
    this.http.get<Account[]>(this.accountRoute + "?deleted=false").subscribe(account => {
      this.account = account;
    });
  }
  ngOnInit() {
    this.getAccount();
  }

  onSelect(accoun){
    this.router.navigate(['/users', accoun.username]);
  }
}
