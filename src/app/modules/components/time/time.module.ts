import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentComponent } from './moment/moment.component';



@NgModule({
  declarations: [MomentComponent],
  imports: [
    CommonModule
  ],
  exports: [MomentComponent]
})
export class TimeModule { }
