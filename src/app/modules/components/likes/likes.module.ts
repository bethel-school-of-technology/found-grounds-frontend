import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayLikesComponent } from './display-likes/display-likes.component';
import { UsersModule } from '../users/users.module';
import { ToggleLikeComponent } from './toggle-like/toggle-like.component';


@NgModule({
  declarations: [DisplayLikesComponent, ToggleLikeComponent],
  imports: [
    CommonModule, UsersModule
  ],
  exports: [ DisplayLikesComponent, ToggleLikeComponent
  ]
})
export class LikesModule { }