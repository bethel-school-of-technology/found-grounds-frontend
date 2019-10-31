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

  private reviewsRoute = 'http://localhost:8080/api/reviews';
  public reviews : Review [];

  constructor(private http: HttpClient) { }
  // + "?deleted=false&shopId=" + shopId
  getReviews(shopId){
    this.http.get<Review[]>(this.reviewsRoute).subscribe(reviews => {
      this.reviews = reviews.filter(reviews => reviews.deleted == false && reviews.shopId == shopId);
    })
  }
 
  public reviewToPost: Review;
  public reviewToDelete: Review;

  isAdded: boolean = false;
  confirmationString: string = "New comment has been uploaded";
  uploadNewReview(review){
    this.reviewToPost = {
      "text": review.text,
      "shopId": this.shopId,
      "userId": this.token,
      "deleted": false,
      "reviewId": review.id,
      "rating": review.rating,
      "timePosted": moment(),
      "edited": false,
    }
    this.http.post(this.reviewsRoute, this.reviewToPost)
      .toPromise().then(()=> {this.ngOnInit()});}

      private cafesRoute = 'http://localhost:8080/api/shops';
      public cafe: Shop[];

      // + "?shopId=" + this.shopId
  getCafe(){
    this.http.get<Shop[]>(this.cafesRoute).subscribe(cafe => {
      this.cafe = cafe.filter(cafe => cafe.shopId == this.shopId && cafe.deleted == false);
    });
  }

  deleteReview(review){
    if(confirm("Are you sure?")){
      this.reviewToDelete = {
        "text": review.text,
        "shopId": this.shopId,
        "userId": this.token,
        "reviewId": review.reviewId,
        "rating": review.rating,
        "timePosted": moment(),
        "edited": false,
        "deleted": true
      }
      const url = `${this.reviewsRoute}/${review.reviewId}`;
      return this.http.put(url, this.reviewToDelete)
      .toPromise().then(()=> {this.ngOnInit()})}
    }

  private usersRoute = 'http://localhost:8080/api/users'
  public user: User[];

  // "?deleted=false&userId=" + token
  refreshUser(token){
  this.http.get<User[]>(this.usersRoute).subscribe(user => {
    this.user = user.filter(user => user.deleted == false && user.userId == token);
  })
}

  ngOnInit() {
    this.getReviews(this.shopId);
    this.getCafe()
    this.refreshUser(this.token);
  };
}

// a quick video about the features that are in the front end right now.