import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupUserpageComponent } from './signup-userpage/signup-userpage.component';
import { SignupCafepageComponent } from './signup-cafepage/signup-cafepage.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SignupUserpageComponent, SignupCafepageComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [SignupUserpageComponent, SignupCafepageComponent]
})
export class SignuppagesModule { }
