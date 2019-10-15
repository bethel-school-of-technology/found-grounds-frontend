import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayAllprofilesComponent } from './display-allprofiles/display-allprofiles.component';
import { DisplayProfilepageComponent } from './display-profilepage/display-profilepage.component';
import { ProfilesModule } from '../services/profiles/profiles.module';


@NgModule({
  declarations: [DisplayAllprofilesComponent, DisplayProfilepageComponent],
  imports: [
    CommonModule, ProfilesModule
  ],
  exports: [DisplayAllprofilesComponent],
})
export class UserprofileModule { }
