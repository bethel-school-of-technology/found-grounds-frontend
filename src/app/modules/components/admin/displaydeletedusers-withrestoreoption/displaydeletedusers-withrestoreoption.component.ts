import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../../../shared/models/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaydeletedusers-withrestoreoption',
  templateUrl: './displaydeletedusers-withrestoreoption.component.html',
  styleUrls: ['./displaydeletedusers-withrestoreoption.component.css']
})
export class DisplaydeletedusersWithrestoreoptionComponent implements OnInit {
  private accountRoute = 'http://localhost:3000/accounts';
  public account: Account[];
  
  constructor(private http: HttpClient, private router: Router) { }

  getDeletedAccounts(){
    this.http.get<Account[]>(this.accountRoute + "?deleted=true").subscribe(account => {
      this.account = account;
    });
  }

  restoreAccount(accoun){
    if(confirm("Are you sure? You will be deleting user " + accoun.id)){
      const restoredAccount = {
        "userId": accoun.userId,
        "firstName": accoun.firstName,
        "lastName": accoun.lastName,
        "profilePicture_URL": accoun.profilePicture_URL,
        "city": accoun.city,
        "state": accoun.state,
        "bio": accoun.bio,
        "birthday": accoun.birthday,
        "username": accoun.username,
        "deleted": false
      }
      const url = `${this.accountRoute}/${accoun.id}`;
      return this.http.put(url, restoredAccount)
      .toPromise().then(()=>{this.getDeletedAccounts()})
    }
  }

  

  ngOnInit() {
    this.getDeletedAccounts();
  }

  onSelect(accoun){
    this.router.navigate(['/users', accoun.username]);
  }
}
