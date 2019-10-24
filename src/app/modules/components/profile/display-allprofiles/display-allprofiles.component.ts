import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-allprofiles',
  templateUrl: './display-allprofiles.component.html',
  styleUrls: ['./display-allprofiles.component.css']
})
export class DisplayAllprofilesComponent implements OnInit {
  private userRoute = 'http://localhost:3000/users';
  public user: User[];
  
  constructor(private http: HttpClient, private router: Router) { }

  getUser(){
    this.http.get<User[]>(this.userRoute + "?deleted=false").subscribe(user => {
      this.user = user;
    });
  }
  ngOnInit() {
    this.getUser();
  }

  onSelect(use){
    this.router.navigate(['/users', use.username]);
  }
}
