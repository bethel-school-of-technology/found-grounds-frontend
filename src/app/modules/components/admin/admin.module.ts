import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayallpostsWithdeleteoptionComponent } from './displayallposts-withdeleteoption/displayallposts-withdeleteoption.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsModule } from '../comments/comments.module';
import { UsersModule } from '../users/users.module';
import { LikesModule } from '../likes/likes.module';
import { CafesModule } from '../cafes/cafes.module';
import { PostsModule } from '../posts/posts.module';
import { DisplayallusersWithdeleteoptionComponent } from './displayallusers-withdeleteoption/displayallusers-withdeleteoption.component';
import { DisplayallcafesWithdeleteoptionComponent } from './displayallcafes-withdeleteoption/displayallcafes-withdeleteoption.component';
import { DisplaydeletedcafesWithrestoreoptionComponent } from './displaydeletedcafes-withrestoreoption/displaydeletedcafes-withrestoreoption.component';
import { DisplaydeletedpostsWithrestoreoptionComponent } from './displaydeletedposts-withrestoreoption/displaydeletedposts-withrestoreoption.component';
import { DisplaydeletedusersWithrestoreoptionComponent } from './displaydeletedusers-withrestoreoption/displaydeletedusers-withrestoreoption.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { SimplydisplaypostsComponent } from './simplydisplayposts/simplydisplayposts.component';
import { TimeModule } from '../time/time.module'

@NgModule({
  declarations: [DisplayallpostsWithdeleteoptionComponent, DisplayallusersWithdeleteoptionComponent, DisplayallcafesWithdeleteoptionComponent, DisplaydeletedcafesWithrestoreoptionComponent, DisplaydeletedpostsWithrestoreoptionComponent, DisplaydeletedusersWithrestoreoptionComponent, AdminnavbarComponent, SimplydisplaypostsComponent],
  imports: [
    CommonModule, UsersModule, CommentsModule, CafesModule, LikesModule, TimeModule
  ],
  exports: [DisplayallpostsWithdeleteoptionComponent, DisplayallusersWithdeleteoptionComponent, DisplayallcafesWithdeleteoptionComponent, DisplaydeletedcafesWithrestoreoptionComponent, DisplaydeletedpostsWithrestoreoptionComponent, DisplaydeletedusersWithrestoreoptionComponent, AdminnavbarComponent, SimplydisplaypostsComponent ]
})
export class AdminModule { }
