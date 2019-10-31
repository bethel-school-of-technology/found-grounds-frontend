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
  private cafesRoute = 'http://localhost:8080/api/shops';
  public cafe: Shop[];
  public editing = "editing";
  @Input() shopId: number;
  @Input() token;

  constructor( private http: HttpClient, private router: Router) { }
  // + "?deleted=false&adminId=" + this.token
  getCafe(){
    this.http.get<Shop[]>(this.cafesRoute ).subscribe(cafe => {
      this.cafe = cafe.filter(cafe => cafe.deleted == false && cafe.adminId == this.token);
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
        "deleted": true,
        "adminId": cafe.adminId
      }
      const url = `${this.cafesRoute}/${cafe.shopId}`;
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
        "deleted": false,
        "adminId": cafe.adminId
      }
      const url = `${this.cafesRoute}/${cafe.shopId}`;
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