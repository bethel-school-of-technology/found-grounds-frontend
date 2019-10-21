import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-display-cafepage',
  templateUrl: './display-cafepage.component.html',
  styleUrls: ['./display-cafepage.component.css']
})
export class DisplayCafepageComponent implements OnInit {
  // @Input() userId: number;
  token=1;
  public cafeId;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    let cafeId = parseInt(this.route.snapshot.paramMap.get('id'))
    this.cafeId = cafeId;
  }

}
