import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayAdminpageComponent } from './display-adminpage/display-adminpage.component';
import { AdmindeletepostComponent } from './components/admindeletepost/admindeletepost.component';
import { PostsModule } from '../components/posts/posts.module';
import { CafepageModule } from '../cafepage/cafepage.module'


@NgModule({
  declarations: [DisplayAdminpageComponent, AdmindeletepostComponent],
  imports: [
    CommonModule, PostsModule, CafepageModule
  ],
  exports: [DisplayAdminpageComponent, AdmindeletepostComponent]
})
export class AdminpageModule { }
