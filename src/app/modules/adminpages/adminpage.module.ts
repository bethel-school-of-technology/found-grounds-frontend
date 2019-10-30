import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayAdminpageComponent } from './display-adminpage/display-adminpage.component';
import { PostsModule } from '../components/posts/posts.module';
import { CafesModule } from '../components/cafes/cafes.module';
import { ProfilesModule } from '../components/profile/profiles.module'
import { AdminModule } from '../components/admin/admin.module';
import { DisplayRestorecontentpageComponent } from './display-restorecontentpage/display-restorecontentpage.component';
import { DisplayDeletecontentpageComponent } from './display-deletecontentpage/display-deletecontentpage.component';
import { CafeadminModule } from '../components/cafeadmin/cafeadmin.module';

@NgModule({
  declarations: [DisplayAdminpageComponent, DisplayRestorecontentpageComponent, DisplayDeletecontentpageComponent],
  imports: [
    CommonModule, PostsModule, CafesModule, ProfilesModule, AdminModule, CafeadminModule
  ],
  exports: [DisplayAdminpageComponent, DisplayRestorecontentpageComponent]
})
export class AdminpageModule { }
