import { HomeComponent } from './shared/components/home/home.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DisplayDailybrewPageComponent } from './modules/dailybrewpage/display-dailybrew-page/display-dailybrew-page.component';
import { DisplayCafepageComponent } from './modules/cafepage/display-cafepage/display-cafepage.component';
import { DisplayAllprofilespageComponent } from './modules/profilepages/display-allprofilespage/display-allprofilespage.component';
import { DisplayProfilepageComponent } from './modules/profilepages/display-profilepage/display-profilepage.component';
import { DisplayAdminpageComponent } from './modules/adminpage/display-adminpage/display-adminpage.component';
import { DisplayAllcafespageComponent } from './modules/cafepage/display-allcafespage/display-allcafespage.component';
import {DisplayRestorecontentpageComponent} from './modules/adminpage/display-restorecontentpage/display-restorecontentpage.component';
import { DisplayDeletecontentpageComponent } from './modules/adminpage/display-deletecontentpage/display-deletecontentpage.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
     path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'dailybrew',
    component: DisplayDailybrewPageComponent,
  },
  {
    path: 'cafes',
    component: DisplayAllcafespageComponent,
  },
  {
    path: 'cafes/:id',
    component: DisplayCafepageComponent,
  },
  {
    path: 'users',
    component: DisplayAllprofilespageComponent,
  },
  {
    path: 'users/:username',
    component: DisplayProfilepageComponent,
  },
  {
    path: 'adminaccess',
    component: DisplayAdminpageComponent
  },
  {
    path: 'adminrestore',
    component: DisplayRestorecontentpageComponent
  },
  {
    path: 'admindelete',
    component: DisplayDeletecontentpageComponent
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
export const routingComponents = [
  HomeComponent, SignupComponent, DisplayDailybrewPageComponent, DisplayCafepageComponent,  DisplayAllcafespageComponent, DisplayAllprofilespageComponent, DisplayProfilepageComponent, DisplayAdminpageComponent,DisplayRestorecontentpageComponent, DisplayDeletecontentpageComponent
]