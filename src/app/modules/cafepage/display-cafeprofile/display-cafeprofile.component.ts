import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafe } from '../../../shared/models/cafe';

@Component({
  selector: 'app-display-cafeprofile',
  templateUrl: './display-cafeprofile.component.html',
  styleUrls: ['./display-cafeprofile.component.css']
})
export class DisplayCafeprofileComponent implements OnInit {
  private cafesRoute = 'http://localhost:3000/cafes';
  public cafe: Cafe;
  @Input() cafeId: number;

  constructor( private http: HttpClient) { }
  getCafe(){
    this.http.get<Cafe>(this.cafesRoute + "?cafeId=" + this.cafeId).subscribe(cafe => {
      this.cafe = cafe;
    });
  }

  ngOnInit() {
    this.getCafe();
  }

}
