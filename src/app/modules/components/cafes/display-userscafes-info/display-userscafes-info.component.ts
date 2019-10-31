import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../../../../shared/models/shop';

@Component({
  selector: 'app-display-userscafes-info',
  templateUrl: './display-userscafes-info.component.html',
  styleUrls: ['./display-userscafes-info.component.css']
})
export class DisplayUserscafesInfoComponent implements OnInit {
  private cafesRoute = 'http://localhost:8080/api/shops';
  public cafe: Shop[];
  @Input() shopId: number;

  constructor( private http: HttpClient) { }
  // + "?shopId=" + this.shopId
  getCafe(){
    this.http.get<Shop[]>(this.cafesRoute).subscribe(cafe => {
      this.cafe = cafe.filter(cafe => cafe.shopId == this.shopId);
    });
  }

  ngOnInit() {
    this.getCafe();
  }

}