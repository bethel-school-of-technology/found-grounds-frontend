import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-display-user-profile',
  templateUrl: './display-user-profile.component.html',
  styleUrls: ['./display-user-profile.component.css']
})
export class DisplayUserProfileComponent implements OnInit {
  private userRoute = 'http://localhost:3000/users';
  public user: User[];
  @Input() userId: number;

  constructor( private http: HttpClient) { }
  getUser(){
    this.http.get<User[]>(this.userRoute + "?userId=" + this.userId).subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.getUser();
  }

}
