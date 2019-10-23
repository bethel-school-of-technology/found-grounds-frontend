import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../../../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayallusers-withdeleteoption',
  templateUrl: './displayallusers-withdeleteoption.component.html',
  styleUrls: ['./displayallusers-withdeleteoption.component.css']
})
export class DisplayallusersWithdeleteoptionComponent implements OnInit {
  private accountRoute = 'http://localhost:3000/accounts';
  public account: Account[];
  
  constructor(private http: HttpClient, private router: Router) { }

  getAccount(){
    this.http.get<Account[]>(this.accountRoute + "?deleted=false").subscribe(account => {
      this.account = account;
    });
  }

  deleteAccount(accoun){
    if(confirm("Are you sure? You will be deleting user " + accoun.id)){
      const deletedAccount = {
        "userId": accoun.userId,
        "firstName": accoun.firstName,
        "lastName": accoun.lastName,
        "profilePicture_URL": accoun.profilePicture_URL,
        "city": accoun.city,
        "state": accoun.state,
        "bio": accoun.bio,
        "birthday": accoun.birthday,
        "username": accoun.username,
        "deleted": true
      }
      const url = `${this.accountRoute}/${accoun.id}`;
      return this.http.put(url, deletedAccount)
      .toPromise().then(()=>{this.getAccount()})
    }
  }

  

  ngOnInit() {
    this.getAccount();
  }

  onSelect(accoun){
    this.router.navigate(['/users', accoun.username]);
  }
}
