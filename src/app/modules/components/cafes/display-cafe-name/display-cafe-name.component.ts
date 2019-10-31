import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../../../../shared/models/shop';

@Component({
  selector: 'app-display-cafe-name',
  templateUrl: './display-cafe-name.component.html',
  styleUrls: ['./display-cafe-name.component.css']
})
export class DisplayCafeNameComponent implements OnInit {
  private cafesRoute = 'http://localhost:8080/api/shops';
  public cafe: Shop[];
  @Input() shopId: number;

  constructor(private http: HttpClient) { }
  // + "?shopId=" + this.shopId

  getShop(){
    this.http.get<Shop[]>(this.cafesRoute).subscribe(cafe => {
      this.cafe = cafe.filter(cafe => cafe.shopId == this.shopId && cafe.deleted == false);
    });
  }

  ngOnInit() {
    this.getShop();
  }


}
