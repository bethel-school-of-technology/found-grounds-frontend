import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafe } from '../../../../shared/models/cafe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaydeletedcafes-withrestoreoption',
  templateUrl: './displaydeletedcafes-withrestoreoption.component.html',
  styleUrls: ['./displaydeletedcafes-withrestoreoption.component.css']
})
export class DisplaydeletedcafesWithrestoreoptionComponent implements OnInit {

  private cafesRoute = 'http://localhost:3000/cafes';
  public cafes: Cafe[];

  constructor(private http: HttpClient, private router: Router) { }
  getDeletedCafes(){
    this.http.get<Cafe[]>(this.cafesRoute +"?deleted=true").subscribe(cafes => {
      this.cafes = cafes;
    });
  }

  restoreCafe(cafe){
    if(confirm("Are you sure?")){
      const restoredCafe = {
        "cafeId": cafe.cafeId,
        "bio": cafe.bio,
        "cafeName": cafe.cafeName,
        "cafeAddress": cafe.cafeAddress,
        "cafeCity": cafe.cafeCity,
        "cafeState": cafe.cafeState,
        "rating": cafe.rating,
        "profilePicture_URL": cafe.profilePicture_URL,
        "id": cafe.id,
        "deleted": false
      }
      const url = `${this.cafesRoute}/${cafe.id}`;
      return this.http.put(url, restoredCafe)
      .toPromise().then(()=>{this.getDeletedCafes()})
    }
  }
  ngOnInit() {
    this.getDeletedCafes();
  }

  onSelect(cafe){
    this.router.navigate(['/cafes', cafe.cafeId]);
  }
}
