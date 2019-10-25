import { Component, OnInit, Input } from '@angular/core';
import { Shop } from '../../../../shared/models/shop';
import { Review } from '../../../../shared/models/review';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

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

  ngOnInit() {
    this.getReviews(this.shopId);
    this.getCafe()
  };
}
