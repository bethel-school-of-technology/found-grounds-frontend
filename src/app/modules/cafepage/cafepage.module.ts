import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayCafepageComponent } from './display-cafepage/display-cafepage.component';
import { PostsModule } from '../components/posts/posts.module';
import { AccountsModule } from '../components/accounts/accounts.module';
import { ReviewsModule } from '../components/reviews/reviews.module';
import { PhotosModule } from '../components/photos/photos.module';
import { MenuModule } from '../components/menu/menu.module';
import { CafesModule } from '../components/cafes/cafes.module';
import { DisplayAllcafesComponent } from './display-allcafes/display-allcafes.component';

@NgModule({
  declarations: [DisplayCafepageComponent, DisplayAllcafesComponent],
  imports: [
    CommonModule, PostsModule, AccountsModule, ReviewsModule, PhotosModule, MenuModule, CafesModule
  ],
  exports: [DisplayCafepageComponent, DisplayAllcafesComponent]
})
export class CafepageModule { }
