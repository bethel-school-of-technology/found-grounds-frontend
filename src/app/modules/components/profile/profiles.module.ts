import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayProfilepageProfileComponent } from './display-profilepage-profile/display-profilepage-profile.component';
import { DisplayUserProfileComponent } from './display-user-profile/display-user-profile.component';
import { DisplayAllprofilesComponent } from './display-allprofiles/display-allprofiles.component';



@NgModule({
  declarations: [DisplayProfilepageProfileComponent, DisplayUserProfileComponent, DisplayAllprofilesComponent],
  imports: [
    CommonModule
  ],
  exports: [DisplayProfilepageProfileComponent, DisplayUserProfileComponent, DisplayAllprofilesComponent]
})
export class ProfilesModule { }
