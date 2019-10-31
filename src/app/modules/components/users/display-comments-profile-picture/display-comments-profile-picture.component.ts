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
  private usersRoute = 'http://localhost:8080/api/users'; 
  public user: User[];

  constructor(private http: HttpClient) { }
  // + "?userId=" + userId
  getUser(userId){
    this.http.get<User[]>(this.usersRoute).subscribe(user => {
      this.user = user.filter(user => user.userId == userId && user.deleted == false);
    })
  }
  ngOnInit() {
    this.getUser(this.userId);
  };
}
