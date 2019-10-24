import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  @Input() userId: number;
  private usersRoute = 'http://localhost:3000/users'; 
  public user: User;

  constructor(private http: HttpClient, private router: Router) { }
  getUser(userId){
    this.http.get<User>(this.usersRoute + "?userId=" + userId).subscribe(user => {
      this.user = user;
    })
  }
  ngOnInit() {
    this.getUser(this.userId);
  };

  onSelect(use){
    this.router.navigate(['/users', use.username]);
  }
}
