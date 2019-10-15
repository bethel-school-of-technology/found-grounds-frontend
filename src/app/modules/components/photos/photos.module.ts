import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoboxComponent } from './photobox/photobox.component';
import { DisplayUsersphotosComponent } from './display-usersphotos/display-usersphotos.component';



@NgModule({
  declarations: [PhotoboxComponent, DisplayUsersphotosComponent],
  imports: [
    CommonModule
  ],
  exports: [PhotoboxComponent, DisplayUsersphotosComponent]
})
export class PhotosModule { }
