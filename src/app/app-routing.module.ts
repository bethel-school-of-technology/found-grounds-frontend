import { HomeComponent } from './shared/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DisplayDailybrewPageComponent } from './modules/dailybrewpage/display-dailybrew-page/display-dailybrew-page.component';
import { DisplayCafepageComponent } from './modules/cafepages/display-cafepage/display-cafepage.component';
import { DisplayAllprofilespageComponent } from './modules/profilepages/display-allprofilespage/display-allprofilespage.component';
import { DisplayProfilepageComponent } from './modules/profilepages/display-profilepage/display-profilepage.component';
import { DisplayAdminpageComponent } from './modules/adminpages/display-adminpage/display-adminpage.component';
import { DisplayAllcafespageComponent } from './modules/cafepages/display-allcafespage/display-allcafespage.component';
import {DisplayRestorecontentpageComponent} from './modules/adminpages/display-restorecontentpage/display-restorecontentpage.component';
import { DisplayDeletecontentpageComponent } from './modules/adminpages/display-deletecontentpage/display-deletecontentpage.component';
import { SignupUserpageComponent } from './modules/signuppages/signup-userpage/signup-userpage.component';
import { SignupCafepageComponent } from './modules/signuppages/signup-cafepage/signup-cafepage.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
     path: 'signup',
    component: SignupUserpageComponent,
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
  },
  {
    path: 'signupcafe',
    component: SignupCafepageComponent
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
  HomeComponent, DisplayDailybrewPageComponent, DisplayCafepageComponent,  DisplayAllcafespageComponent, DisplayAllprofilespageComponent, DisplayProfilepageComponent, DisplayAdminpageComponent,DisplayRestorecontentpageComponent, DisplayDeletecontentpageComponent, SignupUserpageComponent, SignupCafepageComponent
]