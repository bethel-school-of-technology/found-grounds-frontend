import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafe } from '../../../shared/models/cafe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-allcafes',
  templateUrl: './display-allcafes.component.html',
  styleUrls: ['./display-allcafes.component.css']
})
export class DisplayAllcafesComponent implements OnInit {
  private cafesRoute = 'http://localhost:3000/cafes';
  public cafes: Cafe[];

  constructor(private http: HttpClient, private router: Router) { }
  getCafes(){
    this.http.get<Cafe[]>(this.cafesRoute).subscribe(cafes => {
      this.cafes = cafes;
    });
  }
  ngOnInit() {
    this.getCafes();
  }

  onSelect(cafe){
    this.router.navigate(['/cafes', cafe.cafeId]);
  }
}
