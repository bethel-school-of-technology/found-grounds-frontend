import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayCommentsComponent } from './display-comments/display-comments.component';
import { UsersModule } from '../users/users.module';
import { UploadCommentsComponent } from './upload-comments/upload-comments.component';
import { CommentboxComponent } from './commentbox/commentbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DisplayCommentsComponent, UploadCommentsComponent, CommentboxComponent],
  imports: [
    CommonModule, UsersModule, FormsModule
  ],
  exports: [DisplayCommentsComponent, UploadCommentsComponent, CommentboxComponent]
})
export class CommentsModule { }
