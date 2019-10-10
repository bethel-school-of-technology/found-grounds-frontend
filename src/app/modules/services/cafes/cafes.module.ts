import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsModule } from '../../services/accounts/accounts.module';
import { ReviewsModule } from '../../services/reviews/reviews.module';
import { PhotosModule } from '../../services/photos/photos.module';
import { MenuModule } from '../../services/menu/menu.module';
import { DisplayCafeprofileComponent } from '../cafes/display-cafeprofile/display-cafeprofile.component';
import { DisplayCafeNameComponent } from './display-cafe-name/display-cafe-name.component';
import { SelectCafeDropdownComponent } from './select-cafe-dropdown/select-cafe-dropdown.component';

@NgModule({
  declarations: [DisplayCafeprofileComponent, DisplayCafeNameComponent, SelectCafeDropdownComponent],
  imports: [
    CommonModule, AccountsModule, ReviewsModule, PhotosModule, MenuModule
  ],
  exports: [DisplayCafeprofileComponent, DisplayCafeNameComponent,  SelectCafeDropdownComponent]
})
export class CafesModule { }
