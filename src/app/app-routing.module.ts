import { ProfilesModule } from './modules/fullprofilepage/profiles/profiles.module';
import { HomeComponent } from './shared/components/home/home.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
     path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'profile',
    component: ProfilesModule
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
