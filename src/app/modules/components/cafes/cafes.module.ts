import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsModule } from '../accounts/accounts.module';
import { ReviewsModule } from '../reviews/reviews.module';
import { PhotosModule } from '../photos/photos.module';
import { MenuModule } from '../menu/menu.module';
import { DisplayCafeprofileComponent } from './display-cafeprofile/display-cafeprofile.component';
import { DisplayCafeNameComponent } from './display-cafe-name/display-cafe-name.component';
import { SelectCafeDropdownComponent } from './select-cafe-dropdown/select-cafe-dropdown.component';
import { DisplayUserscafesComponent } from './display-userscafes/display-userscafes.component';
import { DisplayUserscafesInfoComponent } from './display-userscafes-info/display-userscafes-info.component';

@NgModule({
  declarations: [DisplayCafeprofileComponent, DisplayCafeNameComponent, SelectCafeDropdownComponent, DisplayUserscafesComponent, DisplayUserscafesInfoComponent],
  imports: [
    CommonModule, AccountsModule, ReviewsModule, PhotosModule, MenuModule
  ],
  exports: [DisplayCafeprofileComponent, DisplayCafeNameComponent,  SelectCafeDropdownComponent, DisplayUserscafesComponent]
})
export class CafesModule { }
