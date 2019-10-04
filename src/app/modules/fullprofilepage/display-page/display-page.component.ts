import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {
  // pulls in userId from login token
  @Input() userId: number;

  constructor() { }

  ngOnInit() {
  }
 
}
