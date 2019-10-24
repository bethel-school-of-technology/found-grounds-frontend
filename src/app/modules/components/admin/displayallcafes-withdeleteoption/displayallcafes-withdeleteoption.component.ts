import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafe } from '../../../../shared/models/cafe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayallcafes-withdeleteoption',
  templateUrl: './displayallcafes-withdeleteoption.component.html',
  styleUrls: ['./displayallcafes-withdeleteoption.component.css']
})
export class DisplayallcafesWithdeleteoptionComponent implements OnInit {

  private cafesRoute = 'http://localhost:3000/cafes';
  public cafes: Cafe[];

  constructor(private http: HttpClient, private router: Router) { }
  getCafes(){
    this.http.get<Cafe[]>(this.cafesRoute +"?deleted=false").subscribe(cafes => {
      this.cafes = cafes;
    });
  }

  deleteCafe(cafe){
    if(confirm("Are you sure?")){
      const deletedCafe = {
        "shopId": cafe.shopId,
        "bio": cafe.bio,
        "cafeName": cafe.cafeName,
        "cafeAddress": cafe.cafeAddress,
        "cafeCity": cafe.cafeCity,
        "cafeState": cafe.cafeState,
        "rating": cafe.rating,
        "imageUrl": cafe.imageUrl,
        "id": cafe.id,
        "deleted": true
      }
      const url = `${this.cafesRoute}/${cafe.id}`;
      return this.http.put(url, deletedCafe)
      .toPromise().then(()=>{this.getCafes()})
    }
  }
  ngOnInit() {
    this.getCafes();
  }

  onSelect(cafe){
    this.router.navigate(['/cafes', cafe.shopId]);
  }
}

