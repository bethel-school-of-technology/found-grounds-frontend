import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupUserpageComponent } from './signup-userpage/signup-userpage.component';
import { SignupCafepageComponent } from './signup-cafepage/signup-cafepage.component';
import { FormsModule } from '@angular/forms';
import { CafeadminModule } from '../components/cafeadmin/cafeadmin.module';
import { CafesModule } from '../components/cafes/cafes.module';



@NgModule({
  declarations: [SignupUserpageComponent, SignupCafepageComponent],
  imports: [
    CommonModule, FormsModule,  CafeadminModule, CafesModule
  ],
  exports: [SignupUserpageComponent, SignupCafepageComponent]
})
export class SignuppagesModule { }
