import { Component, OnInit, Input } from '@angular/core';
import { Shop } from '../../../../shared/models/shop';
import { Review } from '../../../../shared/models/review';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { User } from '.././../../../shared/models/user';

@Component({
  selector: 'app-reviewbox',
  templateUrl: './reviewbox.component.html',
  styleUrls: ['./reviewbox.component.css']
})
export class ReviewboxComponent implements OnInit {
  @Input() shopId: number;
  @Input() userId: number;
  @Input() token: number;

  private reviewsRoute = 'http://localhost:3000/reviews';
  public reviews : Review [];

  constructor(private http: HttpClient) { }
  getReviews(shopId){
    this.http.get<Review[]>(this.reviewsRoute + "?deleted=false&shopId=" + shopId).subscribe(reviews => {
      this.reviews = reviews;
    })
  }
 
  public reviewToPost: Review;
  public reviewToDelete: Review;
  private cafesRoute = 'http://localhost:3000/cafes';
  public cafe: Shop;

  isAdded: boolean = false;
  confirmationString: string = "New comment has been uploaded";
  uploadNewReview(review){
    this.reviewToPost = {
      "text": review.text,
      "shopId": this.shopId,
      "userId": this.token,
      "id": review.id,
      "deleted": false,
      "reviewId": review.id,
      "rating": review.rating,
      "timePosted": moment(),
      "edited": false,
    }
    this.http.post(this.reviewsRoute, this.reviewToPost)
      .toPromise().then(()=> {this.ngOnInit()});}

  getCafe(){
    this.http.get<Shop>(this.cafesRoute + "?shopId=" + this.shopId).subscribe(cafe => {
      this.cafe = cafe;
    });
  }

  deleteReview(review){
    if(confirm("Are you sure?")){
      this.reviewToDelete = {
        "text": review.text,
        "shopId": this.shopId,
        "userId": this.token,
        "id": review.id,
        "reviewId": review.id,
        "rating": review.rating,
        "timePosted": moment(),
        "edited": false,
        "deleted": true
      }
      const url = `${this.reviewsRoute}/${review.id}`;
      return this.http.put(url, this.reviewToDelete)
      .toPromise().then(()=> {this.ngOnInit()})}
    }

  private usersRoute = 'http://localhost:3000/users'
  public user: User;
  refreshUser(token){
  this.http.get<User>(this.usersRoute + "?deleted=false&userId=" + token).subscribe(user => {
    this.user = user;
  })
}

  ngOnInit() {
    this.getReviews(this.shopId);
    this.getCafe()
    this.refreshUser(this.token);
  };
}

// a quick video about the features that are in the front end right now.