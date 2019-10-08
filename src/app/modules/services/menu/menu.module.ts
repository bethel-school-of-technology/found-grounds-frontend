import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayMenuComponent } from './display-menu/display-menu.component';



@NgModule({
  declarations: [DisplayMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [DisplayMenuComponent]
})
export class MenuModule { }
