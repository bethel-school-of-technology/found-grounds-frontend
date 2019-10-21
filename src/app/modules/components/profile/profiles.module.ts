import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayProfilepageProfileComponent } from './display-profilepage-profile/display-profilepage-profile.component';
import { DisplayUserProfileComponent } from './display-user-profile/display-user-profile.component';



@NgModule({
  declarations: [DisplayProfilepageProfileComponent, DisplayUserProfileComponent],
  imports: [
    CommonModule
  ],
  exports: [DisplayProfilepageProfileComponent, DisplayUserProfileComponent]
})
export class ProfilesModule { }
