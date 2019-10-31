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
  private usersRoute = 'http://localhost:8080/api/users'; 
  public user: User[];

  constructor(private http: HttpClient, private router: Router) { }
  
  getPostUser(userId){
    this.http.get<User[]>(this.usersRoute).subscribe(user => {
      this.user = user.filter(user => user.userId == userId && user.deleted == false);
    })
  }
// user has to be User [] because getPostUser has to filter through users to get the user who Posted

  ngOnInit() {
    this.getPostUser(this.userId);
  };

  onSelect(use){
    this.router.navigate(['/users', use.username]);
  }
}
