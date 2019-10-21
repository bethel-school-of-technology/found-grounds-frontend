import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayPostsComponent } from './display-posts/display-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsModule } from '../comments/comments.module';
import { AccountsModule } from '../accounts/accounts.module';
import { LikesModule } from '../likes/likes.module';
import { DisplayCafepostsComponent } from './display-cafeposts/display-cafeposts.component';
import { CafesModule } from '../cafes/cafes.module';
import { DisplayProfilepostsComponent } from './display-profileposts/display-profileposts.component';
import { TimeModule } from '../time/time.module';

@NgModule({
  declarations: [DisplayPostsComponent, DisplayCafepostsComponent, DisplayProfilepostsComponent],
  imports: [
    CommonModule, HttpClientModule, CommentsModule, AccountsModule, LikesModule, CafesModule, TimeModule
  ],
  exports: [DisplayPostsComponent, DisplayCafepostsComponent, DisplayProfilepostsComponent]
})
export class PostsModule { }
