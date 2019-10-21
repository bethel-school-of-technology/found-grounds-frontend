import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayallpostsWithdeleteoptionComponent } from './displayallposts-withdeleteoption/displayallposts-withdeleteoption.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsModule } from '../comments/comments.module';
import { AccountsModule } from '../accounts/accounts.module';
import { LikesModule } from '../likes/likes.module';
import { CafesModule } from '../cafes/cafes.module';
import { PostsModule } from '../posts/posts.module';

@NgModule({
  declarations: [DisplayallpostsWithdeleteoptionComponent],
  imports: [
    CommonModule, AccountsModule, CommentsModule, CafesModule, LikesModule
  ],
  exports: [DisplayallpostsWithdeleteoptionComponent]
})
export class AdminModule { }
