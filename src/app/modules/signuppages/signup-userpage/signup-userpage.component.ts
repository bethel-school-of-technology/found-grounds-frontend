import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-userpage',
  templateUrl: './signup-userpage.component.html',
  styleUrls: ['./signup-userpage.component.css']
})
export class SignupUserpageComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  createUser(use){
    if(confirm("Are you ready to find a whole new world of coffee?")){
      const newUser = {
        "userId": use.userId,
        "firstName": use.firstName,
        "lastName": use.lastName,
        "imageUrl": use.imageUrl,
        "city": use.city,
        "state": use.state,
        "bio": use.bio,
        "birthday": use.birthday,
        "username": use.username,
        "deleted": false,
        "roleId": 1
      }
      const url = 'http://localhost:8080/api/users';
      return this.http.post(url, newUser)
      .toPromise().then(()=>{
        alert("You're all signed up!")
        this.router.navigate(['home']);})
    }
  }

  ngOnInit() {
  }

}
