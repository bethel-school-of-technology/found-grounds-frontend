import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayCafepageComponent } from './display-cafepage/display-cafepage.component';
import { PostsModule } from '../services/posts/posts.module';
import { AccountsModule } from '../services/accounts/accounts.module';
import { ReviewsModule } from '../services/reviews/reviews.module';
import { PhotosModule } from '../services/photos/photos.module';
import { MenuModule } from '../services/menu/menu.module';
import { CafesModule } from '../services/cafes/cafes.module';
import { DisplayAllcafesComponent } from './display-allcafes/display-allcafes.component';

@NgModule({
  declarations: [DisplayCafepageComponent, DisplayAllcafesComponent],
  imports: [
    CommonModule, PostsModule, AccountsModule, ReviewsModule, PhotosModule, MenuModule, CafesModule
  ],
  exports: [DisplayCafepageComponent, DisplayAllcafesComponent]
})
export class CafepageModule { }
