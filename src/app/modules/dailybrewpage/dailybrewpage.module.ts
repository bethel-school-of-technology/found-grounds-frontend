import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDailybrewPageComponent } from './display-dailybrew-page/display-dailybrew-page.component';
import { PostsModule } from '../components/posts/posts.module'
import { ProfilesModule } from '../components/profile/profiles.module';

@NgModule({
  declarations: [DisplayDailybrewPageComponent],
  imports: [
    CommonModule,  PostsModule, ProfilesModule
  ],
  exports: [DisplayDailybrewPageComponent]
})
export class DailybrewpageModule { }
