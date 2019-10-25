import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-allcafespage',
  templateUrl: './display-allcafespage.component.html',
  styleUrls: ['./display-allcafespage.component.css']
})
export class DisplayAllcafespageComponent implements OnInit {

  constructor(private router: Router) { }

  onSelect(){
    this.router.navigate(['signupcafe']);
  }

  ngOnInit() {
  }

}
