import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-display-profilepage-profile',
  templateUrl: './display-profilepage-profile.component.html',
  styleUrls: ['./display-profilepage-profile.component.css']
})
export class DisplayProfilepageProfileComponent implements OnInit {
  private userRoute = 'http://localhost:8080/api/users';
  public user: User[];
  @Input() username: string;

  constructor(private http: HttpClient) { }
  // + "?username=" + this.username
  getUser(){
    this.http.get<User[]>(this.userRoute).subscribe(user => {
      this.user = user.filter(user => user.username == this.username && user.deleted == false);
    });
  }
  ngOnInit() {
    this.getUser();
  }

}
