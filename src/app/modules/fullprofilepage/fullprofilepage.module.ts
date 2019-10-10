import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayPageComponent } from './display-page/display-page.component';
import { PostsModule } from '../services/posts/posts.module'
import { ProfilesModule } from './profiles/profiles.module';
import { AddfriendModule } from './addfriend/addfriend.module';
import { UploadpostModule } from '../services/posts/uploadpost/uploadpost.module';

@NgModule({
  declarations: [DisplayPageComponent],
  imports: [
    CommonModule, PostsModule, ProfilesModule, AddfriendModule, UploadpostModule
  ],
  exports: [DisplayPageComponent]
})
export class FullprofilepageModule { }
