import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Cafe } from '../../../shared/models/shop';

@Component({
  selector: 'app-display-cafepage',
  templateUrl: './display-cafepage.component.html',
  styleUrls: ['./display-cafepage.component.css']
})
export class DisplayCafepageComponent implements OnInit {
  // @Input() userId: number;
  token=1;
  public cafe;
  private cafesRoute = 'http://localhost:3000/cafes';

  constructor( private route: ActivatedRoute, private http: HttpClient) { }

  getCafe(param){
    this.http.get<Cafe>(this.cafesRoute + "?deleted=false&shopId=" + param).subscribe(cafe => {
      this.cafe = cafe
    });}

  ngOnInit() {
    let param = parseInt(this.route.snapshot.paramMap.get('id'))
    this.getCafe(param)
  }

}
