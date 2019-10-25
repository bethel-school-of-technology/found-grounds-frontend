import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../../../../shared/models/shop';

@Component({
  selector: 'app-display-cafe-name-only',
  templateUrl: './display-cafe-name-only.component.html',
  styleUrls: ['./display-cafe-name-only.component.css']
})
export class DisplayCafeNameOnlyComponent implements OnInit {
  private cafesRoute = 'http://localhost:3000/cafes';
  public cafe: Shop;
  @Input() shopId: number;

  constructor(private http: HttpClient) { }
  getCafe(){
    this.http.get<Shop>(this.cafesRoute + "?deleted=false&shopId=" + this.shopId).subscribe(cafe => {
      this.cafe = cafe;
    });
  }

  ngOnInit() {
    this.getCafe();
  }


}
