import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewboxComponent } from './reviewbox/reviewbox.component';
import { UsersModule } from '../users/users.module';
import { FormsModule } from '@angular/forms'
import { TimeModule } from '../time/time.module'

@NgModule({
  declarations: [ReviewboxComponent],
  imports: [
    CommonModule, UsersModule, FormsModule, TimeModule
  ],
  exports: [ReviewboxComponent]
})
export class ReviewsModule { }
