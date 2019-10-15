import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayAllprofilesComponent } from './display-allprofiles/display-allprofiles.component';
import { DisplayProfilepageComponent } from './display-profilepage/display-profilepage.component';
import { ProfilesModule } from '../components/profile/profiles.module';
import { PostsModule } from '../components/posts/posts.module';
import { PhotosModule } from '../components/photos/photos.module';
import { CafesModule } from '../components/cafes/cafes.module';

@NgModule({
  declarations: [DisplayAllprofilesComponent, DisplayProfilepageComponent],
  imports: [
    CommonModule, ProfilesModule, PostsModule, PhotosModule, CafesModule
  ],
  exports: [DisplayAllprofilesComponent],
})
export class UserprofileModule { }
