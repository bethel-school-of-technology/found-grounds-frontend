import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayProfileComponent } from './display-profile/display-profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DisplayProfileComponent],
  imports: [
    CommonModule, HttpClientModule,
  ],
  exports: [DisplayProfileComponent]
})
export class ProfilesModule { }
