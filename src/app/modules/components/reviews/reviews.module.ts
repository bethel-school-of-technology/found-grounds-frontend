import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewboxComponent } from './reviewbox/reviewbox.component';
import { DisplayReviewsComponent } from './display-reviews/display-reviews.component';
import { UsersModule } from '../users/users.module';
import { UploadReviewComponent } from './upload-review/upload-review.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [ReviewboxComponent, DisplayReviewsComponent, UploadReviewComponent],
  imports: [
    CommonModule, UsersModule, FormsModule
  ],
  exports: [ReviewboxComponent, UploadReviewComponent]
})
export class ReviewsModule { }
