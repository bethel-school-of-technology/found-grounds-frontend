import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../../../../shared/models/shop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayallcafes-withdeleteoption',
  templateUrl: './displayallcafes-withdeleteoption.component.html',
  styleUrls: ['./displayallcafes-withdeleteoption.component.css']
})
export class DisplayallcafesWithdeleteoptionComponent implements OnInit {

  private cafesRoute = 'http://localhost:3000/cafes';
  public cafes: Shop[];

  constructor(private http: HttpClient, private router: Router) { }
  getCafes(){
    this.http.get<Shop[]>(this.cafesRoute +"?deleted=false").subscribe(cafes => {
      this.cafes = cafes;
    });
  }

  deleteCafe(cafe){
    if(confirm("Are you sure?")){
      const deletedCafe = {
        "shopId": cafe.shopId,
        "about": cafe.about,
        "name": cafe.name,
        "streetAddress1": cafe.streetAddress1,
        "city": cafe.city,
        "state": cafe.state,
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

