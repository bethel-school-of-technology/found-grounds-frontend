import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-deleteadminpage',
  templateUrl: './deleteadminpage.component.html',
  styleUrls: ['./deleteadminpage.component.css']
})
export class DeleteadminpageComponent implements OnInit {

  constructor(private http: HttpClient) { }

 @Input() token
  public user: User []
  private usersRoute = 'http://localhost:8080/api/users'; 

  // + "?deleted=false&userId=" + this.token
  getUser(){
    this.http.get<User[]>(this.usersRoute).subscribe(user => {
      this.user = user.filter(users => users.deleted == false && users.userId == this.token);
    })
  }

  ngOnInit() {
    this.getUser();
  }

}
