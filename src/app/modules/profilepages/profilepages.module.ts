import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayProfilepageComponent } from './display-profilepage/display-profilepage.component';
import { ProfilesModule } from '../components/profile/profiles.module';
import { PostsModule } from '../components/posts/posts.module';
import { PhotosModule } from '../components/photos/photos.module';
import { CafesModule } from '../components/cafes/cafes.module';
import { DisplayAllprofilespageComponent } from './display-allprofilespage/display-allprofilespage.component';

@NgModule({
  declarations: [DisplayProfilepageComponent, DisplayAllprofilespageComponent],
  imports: [
    CommonModule, ProfilesModule, PostsModule, PhotosModule, CafesModule
  ],
  exports: [DisplayProfilepageComponent, DisplayAllprofilespageComponent],
})
export class ProfilepagesModule { }
