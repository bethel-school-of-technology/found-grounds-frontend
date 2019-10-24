import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-display-comments-profile-picture',
  templateUrl: './display-comments-profile-picture.component.html',
  styleUrls: ['./display-comments-profile-picture.component.css']
})
export class DisplayCommentsProfilePictureComponent implements OnInit {
  @Input() userId: number;
  private usersRoute = 'http://localhost:3000/users'; 
  public user: User;

  constructor(private http: HttpClient) { }
  getUser(userId){
    this.http.get<User>(this.usersRoute + "?userId=" + userId).subscribe(user => {
      this.user = user;
    })
  }
  ngOnInit() {
    this.getUser(this.userId);
  };
}
