import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from '../users/users.module';
import { ReviewsModule } from '../reviews/reviews.module';
import { PhotosModule } from '../photos/photos.module';
import { MenuModule } from '../menu/menu.module';
import { DisplayCafeprofileComponent } from './display-cafeprofile/display-cafeprofile.component';
import { DisplayCafeNameComponent } from './display-cafe-name/display-cafe-name.component';
import { DisplayUserscafesComponent } from './display-userscafes/display-userscafes.component';
import { DisplayUserscafesInfoComponent } from './display-userscafes-info/display-userscafes-info.component';
import { DisplayAllcafeprofilesComponent } from './display-allcafeprofiles/display-allcafeprofiles.component';
import { TimeModule } from '../time/time.module';
@NgModule({
  declarations: [DisplayCafeprofileComponent, DisplayCafeNameComponent, DisplayUserscafesComponent, DisplayUserscafesInfoComponent, DisplayAllcafeprofilesComponent],
  imports: [
    CommonModule, UsersModule, ReviewsModule, PhotosModule, MenuModule, TimeModule
  ],
  exports: [DisplayCafeprofileComponent, DisplayCafeNameComponent, DisplayUserscafesComponent, DisplayAllcafeprofilesComponent]
})
export class CafesModule { }
