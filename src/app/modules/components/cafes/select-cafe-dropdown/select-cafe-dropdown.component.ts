import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafe } from '../../../../shared/models/cafe';

@Component({
  selector: 'app-select-cafe-dropdown',
  templateUrl: './select-cafe-dropdown.component.html',
  styleUrls: ['./select-cafe-dropdown.component.css']
})
export class SelectCafeDropdownComponent implements OnInit {
  private cafesRoute = 'http://localhost:3000/cafes';
  public cafes: Cafe[];

  constructor( private http: HttpClient) { }
  getCafe(){
    this.http.get<Cafe[]>(this.cafesRoute).subscribe(cafes => {
      this.cafes = cafes;
    });
  }

  ngOnInit() {
    this.getCafe();
  }

}
