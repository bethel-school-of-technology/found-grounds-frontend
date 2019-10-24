import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayUserComponent } from './display-user/display-user.component';
import { DisplayProfilePictureComponent } from './display-profile-picture/display-profile-picture.component';
import { DisplayCommentsProfilePictureComponent } from './display-comments-profile-picture/display-comments-profile-picture.component';



@NgModule({
  declarations: [DisplayUserComponent, DisplayProfilePictureComponent, DisplayCommentsProfilePictureComponent],
  imports: [
    CommonModule
  ],
  exports: [DisplayUserComponent, DisplayProfilePictureComponent, DisplayCommentsProfilePictureComponent]
})
export class UsersModule { }
