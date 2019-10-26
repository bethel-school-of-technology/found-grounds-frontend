import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from '../users/users.module';
import { ToggleLikeComponent } from './toggle-like/toggle-like.component';


@NgModule({
  declarations: [ ToggleLikeComponent],
  imports: [
    CommonModule, UsersModule
  ],
  exports: [ ToggleLikeComponent ]
})
export class LikesModule { }