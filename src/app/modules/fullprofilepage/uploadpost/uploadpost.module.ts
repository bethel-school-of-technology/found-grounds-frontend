import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadPostComponent } from './upload-post/upload-post.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UploadPostComponent],
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],
  exports: [UploadPostComponent]
})
export class UploadpostModule { }
