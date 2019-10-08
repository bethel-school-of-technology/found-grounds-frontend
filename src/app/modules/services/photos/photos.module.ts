import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoboxComponent } from './photobox/photobox.component';



@NgModule({
  declarations: [PhotoboxComponent],
  imports: [
    CommonModule
  ],
  exports: [PhotoboxComponent]
})
export class PhotosModule { }
