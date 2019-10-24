import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: User = new User();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // to be replaced by sending it to the database and the password getting hashed and salted
    console.log('Submit Successful: ', this.model)
  }
}
