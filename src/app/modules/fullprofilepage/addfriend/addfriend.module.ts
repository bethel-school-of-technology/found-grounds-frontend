import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayRequestComponent } from './display-request/display-request.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DisplayRequestComponent],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [DisplayRequestComponent]
})

export class AddfriendModule { }
