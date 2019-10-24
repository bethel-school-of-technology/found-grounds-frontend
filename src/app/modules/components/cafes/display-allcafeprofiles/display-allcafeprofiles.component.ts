import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../../../../shared/models/shop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-allcafeprofiles',
  templateUrl: './display-allcafeprofiles.component.html',
  styleUrls: ['./display-allcafeprofiles.component.css']
})
export class DisplayAllcafeprofilesComponent implements OnInit {
  private cafesRoute = 'http://localhost:3000/cafes';
  public cafes: Shop[];

  constructor(private http: HttpClient, private router: Router) { }
  getCafes(){
    this.http.get<Shop[]>(this.cafesRoute + "?deleted=false").subscribe(cafes => {
      this.cafes = cafes;
    });
  }
  ngOnInit() {
    this.getCafes();
  }

  onSelect(cafe){
    this.router.navigate(['/cafes', cafe.shopId]);
  }
}
