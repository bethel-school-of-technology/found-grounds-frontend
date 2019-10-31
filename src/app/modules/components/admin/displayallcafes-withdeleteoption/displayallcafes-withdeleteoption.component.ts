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

  private cafesRoute = 'http://localhost:8080/api/shops';
  public cafes: Shop[];

  constructor(private http: HttpClient, private router: Router) { }
  // +"?deleted=false
  getCafes(){
    this.http.get<Shop[]>(this.cafesRoute).subscribe(cafes => {
      this.cafes = cafes.filter(cafes => cafes.deleted == false);
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
        "deleted": true,
        "adminId": cafe.adminId
      }
      const url = `${this.cafesRoute}/${cafe.shopId}`;
      return this.http.put(url, deletedCafe)
      .toPromise().then(()=>{this.ngOnInit()})
    }
  }
  ngOnInit() {
    this.getCafes();
  }

  onSelect(cafe){
    this.router.navigate(['/cafes', cafe.shopId]);
  }
}

