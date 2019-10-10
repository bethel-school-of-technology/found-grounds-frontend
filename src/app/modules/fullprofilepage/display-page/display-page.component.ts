import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../../shared/models/account';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {
  // pulls in userId from login token
  // @Input() userId: number;
  userId = 1;

  constructor() { }
 


  ngOnInit() {
  }
 
}
