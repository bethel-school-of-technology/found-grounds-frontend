import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaydeletedusers-withrestoreoption',
  templateUrl: './displaydeletedusers-withrestoreoption.component.html',
  styleUrls: ['./displaydeletedusers-withrestoreoption.component.css']
})
export class DisplaydeletedusersWithrestoreoptionComponent implements OnInit {
  private userRoute = 'http://localhost:8080/api/users';
  public user: User[];
  
  constructor(private http: HttpClient, private router: Router) { }

  // + "?deleted=true"
  getDeletedUsers(){
    this.http.get<User[]>(this.userRoute ).subscribe(user => {
      this.user = user.filter(user => user.deleted == true);
    });
  }

  restoreUser(use){
    if(confirm("Are you sure? You will be deleting user " + use.userId)){
      const restoredUser = {
        "userId": use.userId,
        "firstName": use.firstName,
        "lastName": use.lastName,
        "imageUrl": use.imageUrl,
        "city": use.city,
        "state": use.state,
        "bio": use.bio,
        "birthday": use.birthday,
        "username": use.username,
        "deleted": false
      }
      const url = `${this.userRoute}/${use.userId}`;
      return this.http.put(url, restoredUser)
      .toPromise().then(()=>{this.getDeletedUsers()})
    }
  }

  

  ngOnInit() {
    this.getDeletedUsers();
  }

  onSelect(use){
    this.router.navigate(['/users', use.username]);
  }
}
