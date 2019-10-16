import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../../../shared/models/review';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-reviews',
  templateUrl: './display-reviews.component.html',
  styleUrls: ['./display-reviews.component.css']
})
export class DisplayReviewsComponent implements OnInit {
  @Input() cafeId: number;

  private reviewsRoute = 'http://localhost:3000/reviews';
  public reviews : Review [];

  constructor(private http: HttpClient) { }
  getReviews(cafeId){
    this.http.get<Review[]>(this.reviewsRoute + "?cafeId=" + cafeId).subscribe(reviews => {
      this.reviews = reviews;
    })
  }

  onClickComment() {
    alert("Comment!")};

  ngOnInit() {
    this.getReviews(this.cafeId);
  };

 

}
