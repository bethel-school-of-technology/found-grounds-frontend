import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewboxComponent } from './reviewbox/reviewbox.component';
import { DisplayReviewsComponent } from './display-reviews/display-reviews.component';
import { AccountsModule } from '../accounts/accounts.module';


@NgModule({
  declarations: [ReviewboxComponent, DisplayReviewsComponent],
  imports: [
    CommonModule, AccountsModule
  ],
  exports: [ReviewboxComponent]
})
export class ReviewsModule { }
