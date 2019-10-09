import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayPostsComponent } from './display-posts/display-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsModule } from '../../services/comments/comments.module';
import { AccountsModule } from '../../services/accounts/accounts.module';
import { LikesModule } from '../../services/likes/likes.module';

@NgModule({
  declarations: [DisplayPostsComponent],
  imports: [
    CommonModule, HttpClientModule, CommentsModule, AccountsModule, LikesModule
  ],
  exports: [DisplayPostsComponent]
})
export class PostsModule { }
