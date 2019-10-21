import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayAdminpageComponent } from './display-adminpage/display-adminpage.component';
import { PostsModule } from '../components/posts/posts.module';
import { CafesModule } from '../components/cafes/cafes.module';
import { ProfilesModule } from '../components/profile/profiles.module'


@NgModule({
  declarations: [DisplayAdminpageComponent],
  imports: [
    CommonModule, PostsModule, CafesModule, ProfilesModule
  ],
  exports: [DisplayAdminpageComponent]
})
export class AdminpageModule { }
