import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Review } from '../../../../shared/models/review';
import { Shop } from '../../../../shared/models/shop';
import * as moment from 'moment';

@Component({
  selector: 'app-upload-review',
  templateUrl: './upload-review.component.html',
  styleUrls: ['./upload-review.component.css']
})
export class UploadReviewComponent implements OnInit {
  @Input() token: number;
  @Input() shopId: number;

  constructor(private http: HttpClient) { }
  private reviewsRoute = 'http://localhost:3000/reviews';
  public review: Review;

  private cafesRoute = 'http://localhost:3000/cafes';
  public cafe: Shop;

  isAdded: boolean = false;
  confirmationString: string = "New comment has been uploaded";
  uploadNewReview(review){
    this.review = {
      "text": review.text,
      "shopId": this.shopId,
      "userId": this.token,
      "id": review.id,
      "deleted": false,
      "reviewId": review.id,
      "rating": review.rating,
      "timePosted": moment()
    }
    this.http.post(this.reviewsRoute, this.review)
    .subscribe(res => (this.isAdded = true));
    this.ngOnInit();
    // .then(()=>{ this.router.navigate([`/${this.id}`])})
    // add above code once router is done
    ;
  }

  getCafe(){
    this.http.get<Shop>(this.cafesRoute + "?shopId=" + this.shopId).subscribe(cafe => {
      this.cafe = cafe;
    });
  }

  ngOnInit() {
    this.getCafe()
  }

}


