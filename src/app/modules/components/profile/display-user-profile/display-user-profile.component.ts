import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../shared/models/user';
import { filter } from 'minimatch';

@Component({
  selector: 'app-display-user-profile',
  templateUrl: './display-user-profile.component.html',
  styleUrls: ['./display-user-profile.component.css']
})
export class DisplayUserProfileComponent implements OnInit {
  private userRoute = 'http://localhost:8080/api/users';
  public unfilteredUsers: User[];
  public user: User []
  @Input() token: number;

  constructor( private http: HttpClient) { }

  getLoggedOnUser(){
    this.http.get<User[]>(this.userRoute).subscribe(unfilteredUsers => {
      this.user = unfilteredUsers.filter(user => user.userId == this.token && user.deleted == false)
    });
  }

  ngOnInit() {
    this.getLoggedOnUser();
  }

}
