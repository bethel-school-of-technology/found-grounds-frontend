import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangecafeinfoComponent } from './changecafeinfo/changecafeinfo.component';
import { AddeditdeletemenuitemComponent } from './addeditdeletemenuitem/addeditdeletemenuitem.component';
import { FormsModule } from '@angular/forms';
import { CreatecafeComponent } from './createcafe/createcafe.component';



@NgModule({
  declarations: [ ChangecafeinfoComponent, AddeditdeletemenuitemComponent, CreatecafeComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [ ChangecafeinfoComponent, AddeditdeletemenuitemComponent, CreatecafeComponent]
})
export class CafeadminModule { }
