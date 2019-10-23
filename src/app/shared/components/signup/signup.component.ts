import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: Account = new Account();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // to be replaced by sending it to the database and the password getting hashed and salted
    console.log('Submit Successful: ', this.model)
  }
}
