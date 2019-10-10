import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayCafepageComponent } from './display-cafepage/display-cafepage.component';
import { PostsModule } from '../fullprofilepage/posts/posts.module';
import { DisplayCafeprofileComponent } from './display-cafeprofile/display-cafeprofile.component';
import { AccountsModule } from '../services/accounts/accounts.module';
import { ReviewsModule } from '../services/reviews/reviews.module';
import { PhotosModule } from '../services/photos/photos.module';
import { MenuModule } from '../services/menu/menu.module';

@NgModule({
  declarations: [DisplayCafepageComponent, DisplayCafeprofileComponent],
  imports: [
    CommonModule, PostsModule, AccountsModule, ReviewsModule, PhotosModule, MenuModule
  ],
  exports: [DisplayCafepageComponent]
})
export class CafepageModule { }
