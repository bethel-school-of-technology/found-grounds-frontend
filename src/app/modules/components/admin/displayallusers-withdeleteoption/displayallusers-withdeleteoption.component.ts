import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayallusers-withdeleteoption',
  templateUrl: './displayallusers-withdeleteoption.component.html',
  styleUrls: ['./displayallusers-withdeleteoption.component.css']
})
export class DisplayallusersWithdeleteoptionComponent implements OnInit {
  private userRoute = 'http://localhost:8080/api/users';
  public user: User[];
  
  constructor(private http: HttpClient, private router: Router) { }

  // + "?deleted=false"
  getUser(){
    this.http.get<User[]>(this.userRoute).subscribe(user => {
      this.user = user.filter(user => user.deleted == false);
    });
  }

  deleteUser(use){
    if(confirm("Are you sure? You will be deleting user " + use.id)){
      const deletedUser = {
        "userId": use.userId,
        "firstName": use.firstName,
        "lastName": use.lastName,
        "imageUrl": use.imageUrl,
        "city": use.city,
        "state": use.state,
        "bio": use.bio,
        "birthday": use.birthday,
        "username": use.username,
        "deleted": true
      }
      const url = `${this.userRoute}/${use.userId}`;
      return this.http.put(url, deletedUser)
      .toPromise().then(()=>{this.ngOnInit()})
    }
  }

  ngOnInit() {
    this.getUser();
  }

  onSelect(use){
    this.router.navigate(['/users', use.username]);
  }
}
