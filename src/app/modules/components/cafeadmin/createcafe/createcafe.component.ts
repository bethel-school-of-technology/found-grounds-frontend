import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../../../../shared/models/shop';
import { Router } from '@angular/router';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-createcafe',
  templateUrl: './createcafe.component.html',
  styleUrls: ['./createcafe.component.css']
})
export class CreatecafeComponent implements OnInit {
  private cafesRoute = 'http://localhost:8080/api/shops';
  public cafe: Shop[];
  public editing = "editing";
  @Input() shopId: number;
  @Input() token: number;

  constructor( private http: HttpClient, private router: Router) { }
  // + "?adminId=" + this.token
  getCafe(){
    this.http.get<Shop[]>(this.cafesRoute ).subscribe(cafe => {
      this.cafe = cafe.filter(cafe => cafe.adminId == this.token);
    });
  }

  public user
  private usersRoute = 'http://localhost:8080/api/users'; 
  // + "?deleted=false&userId=" + this.token
  getUser(){
    this.http.get<User[]>(this.usersRoute ).subscribe(user => {
      this.user = user.filter(user => user.deleted == false && user.userId == this.token );
    })
  }

  uploadCafe(cafe, userId){
    if(confirm("Are you sure?")){
      const newCafe = {
        "shopId": cafe.shopId,
        "about": cafe.about,
        "name": cafe.name,
        "streetAddress1": cafe.streetAddress1,
        "city": cafe.city,
        "state": cafe.state,
        "rating": null,
        "imageUrl": cafe.imageUrl,
        "deleted": true,
        "adminId": userId
      }
      return this.http.post(this.cafesRoute, newCafe)
      .toPromise().then(()=>{this.ngOnInit()})
    }
  }

createNewAdmin(use){
  if(confirm(use.firstName + ", you will be made admin over this new café")){
    const adminUser = {
      "userId": use.userId,
      "firstName": use.firstName,
      "lastName": use.lastName,
      "imageUrl": use.imageUrl,
      "city": use.city,
      "state": use.state,
      "bio": use.bio,
      "birthday": use.birthday,
      "username": use.username,
      "deleted": false,
      "roleId": 3
    }
    const url = `${this.usersRoute}/${use.userId}`;
    return this.http.put(url, adminUser)
    .toPromise().then(()=>{this.ngOnInit()})
  }
}


  public preview = {
    name:"Your Cafe",
    imageUrl:"https://media.istockphoto.com/photos/caffee-on-table-and-blured-cafe-picture-id652628318?k=6&m=652628318&s=612x612&w=0&h=6K5ioW-NNIFD0WP9gwzPdJFc3bc178twHqzoOjV2k1w=",
    city: "New York",
    streetAddress1: "55 Times Square",
    state: "NY",
    about: "We are the best café ever"
  };

  showAddBox(){
    var x = document.getElementById('newMenu')
    x.style.display = 'block';
  }

  closeAddBox(){
    var x = document.getElementById('newMenu')
    x.style.display = 'none';
  }

  previewName( evt) {
    this.preview.name = evt.target.value;
  }
  previewImage(evt) {
    this.preview.imageUrl = evt.target.value;
  }
  previewCity(evt) {
    this.preview.city = evt.target.value;
  }
  previewState(evt) {
    this.preview.state = evt.target.value;
  }
  previewAbout(evt) {
    this.preview.about = evt.target.value;
  }
  previewStreetAddress1(evt) {
    this.preview.streetAddress1 = evt.target.value;
  }
  ngOnInit() {
    this.getUser();
    this.getCafe();
  }

}