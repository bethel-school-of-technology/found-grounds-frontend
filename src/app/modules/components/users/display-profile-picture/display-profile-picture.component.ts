import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-display-profile-picture',
  templateUrl: './display-profile-picture.component.html',
  styleUrls: ['./display-profile-picture.component.css']
})
export class DisplayProfilePictureComponent implements OnInit {
  @Input() userId: number;
  private usersRoute = 'http://localhost:8080/api/users'; 
  public user: User[];

  constructor(private http: HttpClient) { }
  getUserProfilePicture(userId){
    this.http.get<User[]>(this.usersRoute).subscribe(unfilteredUsers => {
      this.user = unfilteredUsers.filter(user => user.userId == userId && user.deleted == false);
    })
  }

  ngOnInit() {
    this.getUserProfilePicture(this.userId);
  };
}
