import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangecafeinfoComponent } from './changecafeinfo/changecafeinfo.component';
import { AddeditdeletemenuitemComponent } from './addeditdeletemenuitem/addeditdeletemenuitem.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ ChangecafeinfoComponent, AddeditdeletemenuitemComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [ ChangecafeinfoComponent, AddeditdeletemenuitemComponent]
})
export class CafeadminModule { }
