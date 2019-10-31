import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../../../shared/models/shop';
import { TokenService } from '../../../shared/services/token.service';

@Component({
  selector: 'app-display-cafepage',
  templateUrl: './display-cafepage.component.html',
  styleUrls: ['./display-cafepage.component.css']
})
export class DisplayCafepageComponent implements OnInit {
  public token;
  public cafe: Shop[];
  private cafesRoute = 'http://localhost:8080/api/shops';

  constructor( private route: ActivatedRoute, private http: HttpClient, tokenService: TokenService) { 
    this.token = tokenService.token
  }
  
//  + "?deleted=false&shopId=" + param
  getCafe(param){
    this.http.get<Shop[]>(this.cafesRoute).subscribe(cafe => {
      this.cafe = cafe.filter(cafe => cafe.deleted == false && cafe.shopId == param)
    });}

  ngOnInit() {
    let param = parseInt(this.route.snapshot.paramMap.get('id'))
    this.getCafe(param)
  }

}
