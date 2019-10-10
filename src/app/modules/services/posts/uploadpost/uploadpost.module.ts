import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadPostComponent } from './upload-post/upload-post.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CafesModule } from '../../cafes/cafes.module';

@NgModule({
  declarations: [UploadPostComponent],
  imports: [
    CommonModule, HttpClientModule, FormsModule, CafesModule
  ],
  exports: [UploadPostComponent]
})
export class UploadpostModule { }
