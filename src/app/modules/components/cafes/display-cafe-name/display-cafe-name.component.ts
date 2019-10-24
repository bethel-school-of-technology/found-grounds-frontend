import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../../../../shared/models/shop';

@Component({
  selector: 'app-display-cafe-name',
  templateUrl: './display-cafe-name.component.html',
  styleUrls: ['./display-cafe-name.component.css']
})
export class DisplayCafeNameComponent implements OnInit {
  private cafesRoute = 'http://localhost:3000/cafes';
  public cafe: Shop;
  @Input() shopId: number;

  constructor(private http: HttpClient) { }
  getCafe(){
    this.http.get<Shop>(this.cafesRoute + "?shopId=" + this.shopId).subscribe(cafe => {
      this.cafe = cafe;
    });
  }

  ngOnInit() {
    this.getCafe();
  }


}
