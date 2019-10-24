import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from '../users/users.module';
import { CommentboxComponent } from './commentbox/commentbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommentboxComponent],
  imports: [
    CommonModule, UsersModule, FormsModule
  ],
  exports: [CommentboxComponent]
})
export class CommentsModule { }
