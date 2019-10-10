import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-cafepage',
  templateUrl: './display-cafepage.component.html',
  styleUrls: ['./display-cafepage.component.css']
})
export class DisplayCafepageComponent implements OnInit {
  @Input() userId: number;
  cafeId=1;
  
  constructor() { }

  ngOnInit() {
  }

}
