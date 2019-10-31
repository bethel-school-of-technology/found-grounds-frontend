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
  private cafesRoute = 'http://localhost:8080/api/shops';
  public cafes: Shop[];

  constructor(private http: HttpClient, private router: Router) { }
  // + "?deleted=false"
  getCafes(){
    this.http.get<Shop[]>(this.cafesRoute).subscribe(cafes => {
      this.cafes = cafes.filter(cafes => cafes.deleted == false);
    });
  }
  ngOnInit() {
    this.getCafes();
  }

  onSelect(cafe){
    this.router.navigate(['/cafes', cafe.shopId]);
  }
}
