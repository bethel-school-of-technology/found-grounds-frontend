import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayAdminpageComponent } from './display-adminpage/display-adminpage.component';
import { PostsModule } from '../components/posts/posts.module';
import { CafesModule } from '../components/cafes/cafes.module';


@NgModule({
  declarations: [DisplayAdminpageComponent],
  imports: [
    CommonModule, PostsModule, CafesModule
  ],
  exports: [DisplayAdminpageComponent]
})
export class AdminpageModule { }
