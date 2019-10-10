import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Review } from '../../../../shared/models/review';
import { Cafe } from '../../../../shared/models/cafe';
@Component({
  selector: 'app-upload-review',
  templateUrl: './upload-review.component.html',
  styleUrls: ['./upload-review.component.css']
})
export class UploadReviewComponent implements OnInit {
  @Input() userId: number;
  @Input() cafeId: number;

  constructor(private http: HttpClient) { }
  private reviewsRoute = 'http://localhost:3000/reviews';
  public review: Review;

  private cafesRoute = 'http://localhost:3000/cafes';
  public cafe: Cafe;

  isAdded: boolean = false;
  confirmationString: string = "New comment has been uploaded";
  uploadNewReview(review){
    this.review = {
      "text": review.text,
      "cafeId": this.cafeId,
      "userId": this.userId,
      "id": review.id,
      "deleted": false,
      "reviewId": review.id,
      "rating": review.rating
    }
    this.http.post(this.reviewsRoute, this.review)
    .subscribe(res => (this.isAdded = true));
    this.ngOnInit();
    // .then(()=>{ this.router.navigate([`/${this.id}`])})
    // add above code once router is done
    ;
  }

  getCafe(){
    this.http.get<Cafe>(this.cafesRoute + "?cafeId=" + this.cafeId).subscribe(cafe => {
      this.cafe = cafe;
      console.log(cafe.cafeName);
    });
  }

  ngOnInit() {
    this.getCafe()
  }

}


