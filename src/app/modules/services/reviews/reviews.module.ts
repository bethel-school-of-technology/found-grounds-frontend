import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewboxComponent } from './reviewbox/reviewbox.component';
import { DisplayReviewsComponent } from './display-reviews/display-reviews.component';
import { AccountsModule } from '../accounts/accounts.module';
import { UploadReviewComponent } from './upload-review/upload-review.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [ReviewboxComponent, DisplayReviewsComponent, UploadReviewComponent],
  imports: [
    CommonModule, AccountsModule, FormsModule
  ],
  exports: [ReviewboxComponent, UploadReviewComponent]
})
export class ReviewsModule { }
