import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../../../../shared/models/shop';

@Component({
  selector: 'app-display-userscafes-info',
  templateUrl: './display-userscafes-info.component.html',
  styleUrls: ['./display-userscafes-info.component.css']
})
export class DisplayUserscafesInfoComponent implements OnInit {
  private cafesRoute = 'http://localhost:3000/cafes';
  public cafe: Shop;
  @Input() shopId: number;

  constructor( private http: HttpClient) { }
  getCafe(){
    this.http.get<Shop>(this.cafesRoute + "?shopId=" + this.shopId).subscribe(cafe => {
      this.cafe = cafe;
    });
  }

  ngOnInit() {
    this.getCafe();
  }

}