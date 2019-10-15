import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-display-profilepage',
  templateUrl: './display-profilepage.component.html',
  styleUrls: ['./display-profilepage.component.css']
})
export class DisplayProfilepageComponent implements OnInit {
  userId=1
  public username;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    let username= this.route.snapshot.paramMap.get('username')
    this.username = username;
  }

}
