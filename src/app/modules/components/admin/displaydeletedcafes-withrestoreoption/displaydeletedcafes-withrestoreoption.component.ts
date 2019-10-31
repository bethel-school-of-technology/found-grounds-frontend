import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../../../../shared/models/shop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaydeletedcafes-withrestoreoption',
  templateUrl: './displaydeletedcafes-withrestoreoption.component.html',
  styleUrls: ['./displaydeletedcafes-withrestoreoption.component.css']
})
export class DisplaydeletedcafesWithrestoreoptionComponent implements OnInit {

  private cafesRoute = 'http://localhost:8080/api/shops';
  public cafes: Shop[];

  constructor(private http: HttpClient, private router: Router) { }
  // +"?deleted=true"
  getDeletedCafes(){
    this.http.get<Shop[]>(this.cafesRoute ).subscribe(cafes => {
      this.cafes = cafes.filter(cafes => cafes.deleted == true);
    });
  }

  restoreCafe(cafe){
    if(confirm("Are you sure?")){
      const restoredCafe = {
        "shopId": cafe.shopId,
        "about": cafe.about,
        "name": cafe.name,
        "streetAddress1": cafe.streetAddress1,
        "city": cafe.city,
        "state": cafe.state,
        "rating": cafe.rating,
        "imageUrl": cafe.imageUrl,
        "deleted": false,
        "adminId": cafe.adminId
      }
      const url = `${this.cafesRoute}/${cafe.shopId}`;
      return this.http.put(url, restoredCafe)
      .toPromise().then(()=>{this.getDeletedCafes()})
    }
  }
  ngOnInit() {
    this.getDeletedCafes();
  }

  onSelect(cafe){
    this.router.navigate(['/cafes', cafe.shopId]);
  }
}

