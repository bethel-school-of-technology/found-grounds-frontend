import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayAccountComponent } from './display-account/display-account.component';
import { DisplayProfilePictureComponent } from './display-profile-picture/display-profile-picture.component';
import { DisplayCommentsProfilePictureComponent } from './display-comments-profile-picture/display-comments-profile-picture.component';



@NgModule({
  declarations: [DisplayAccountComponent, DisplayProfilePictureComponent, DisplayCommentsProfilePictureComponent],
  imports: [
    CommonModule
  ],
  exports: [DisplayAccountComponent, DisplayProfilePictureComponent, DisplayCommentsProfilePictureComponent]
})
export class AccountsModule { }
