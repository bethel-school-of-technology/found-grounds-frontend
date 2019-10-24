import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-display-profilepage-profile',
  templateUrl: './display-profilepage-profile.component.html',
  styleUrls: ['./display-profilepage-profile.component.css']
})
export class DisplayProfilepageProfileComponent implements OnInit {
  private userRoute = 'http://localhost:3000/users';
  public user: User[];
  @Input() username: string;

  constructor(private http: HttpClient) { }
  getUser(){
    this.http.get<User[]>(this.userRoute + "?username=" + this.username).subscribe(user => {
      this.user = user;
    });
  }
  ngOnInit() {
    this.getUser();
    console.log(this.username);
  }

}
