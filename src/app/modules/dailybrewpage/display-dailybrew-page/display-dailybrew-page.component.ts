import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-dailybrew-page',
  templateUrl: './display-dailybrew-page.component.html',
  styleUrls: ['./display-dailybrew-page.component.css']
})
export class DisplayDailybrewPageComponent implements OnInit {
    // pulls in userId from login token
  // @Input() userId: number;
  token = 2;
  
  constructor() { }

  ngOnInit() {
  }

}
