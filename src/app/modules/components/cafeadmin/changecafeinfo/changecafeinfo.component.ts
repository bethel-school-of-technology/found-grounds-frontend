import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../../../../shared/models/shop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changecafeinfo',
  templateUrl: './changecafeinfo.component.html',
  styleUrls: ['./changecafeinfo.component.css']
})
export class ChangecafeinfoComponent implements OnInit {
  private cafesRoute = 'http://localhost:3000/cafes';
  public cafe: Shop;
  public editing = "editing";
  @Input() shopId: number;

  constructor( private http: HttpClient, private router: Router) { }
  getCafe(){
    this.http.get<Shop>(this.cafesRoute + "?deleted=false&shopId=" + this.shopId).subscribe(cafe => {
      this.cafe = cafe;
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
      .toPromise().then(()=>{this.ngOnInit()})
    }
  }

  editCafe(cafe, newCafe){
    if(confirm("Are you sure?")){
      const editedCafe = {
        "shopId": cafe.shopId,
        "about": newCafe.about,
        "name": newCafe.name,
        "streetAddress1": newCafe.streetAddress1,
        "city": newCafe.city,
        "state": newCafe.state,
        "rating": cafe.rating,
        "imageUrl": newCafe.imageUrl,
        "id": cafe.id,
        "deleted": false,
      }
      const url = `${this.cafesRoute}/${cafe.id}`;
      return this.http.put(url, editedCafe)
      .toPromise().then(()=>{this.ngOnInit()})
    }
  }

  showBox(caf){
    var x = document.getElementById(caf.shopId + this.editing);
    x.style.display = 'block';
  }

  closeBox(caf){
    var x = document.getElementById(caf.shopId + this.editing);
    x.style.display = 'none';
  }

  onSelect(cafe){
    this.router.navigate(['/cafes', cafe.shopId]);
  }

  ngOnInit() {
    this.getCafe();
  }

}