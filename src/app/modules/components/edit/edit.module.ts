import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditpostComponent } from './editpost/editpost.component';


@NgModule({
  declarations: [ EditpostComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [ EditpostComponent]
})
export class EditModule { }
