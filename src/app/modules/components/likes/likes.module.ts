import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayLikesComponent } from './display-likes/display-likes.component';
import { AccountsModule } from '../accounts/accounts.module';
import { ToggleLikeComponent } from './toggle-like/toggle-like.component';


@NgModule({
  declarations: [DisplayLikesComponent, ToggleLikeComponent],
  imports: [
    CommonModule, AccountsModule
  ],
  exports: [ DisplayLikesComponent, ToggleLikeComponent
  ]
})
export class LikesModule { }