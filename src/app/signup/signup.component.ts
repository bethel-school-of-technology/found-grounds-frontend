import { Component, OnInit } from '@angular/core';
import { Accounts } from '../models/accounts';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: Accounts = new Accounts();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // to be replaced by sending it to the database and the password getting hashed and salted
    console.log('Submit Successful: ', this.model)
  }
}
