import { ProfilesModule } from './modules/fullprofilepage/profiles/profiles.module';
import { HomeComponent } from './shared/components/home/home.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DisplayPageComponent } from './modules/fullprofilepage/display-page/display-page.component';
import { DisplayCafepageComponent } from './modules/cafepage/display-cafepage/display-cafepage.component';
import { DisplayAllcafesComponent} from './modules/cafepage/display-allcafes/display-allcafes.component';

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
    component: DisplayPageComponent,
  },
  {
    path: 'cafes',
    component: DisplayAllcafesComponent,
  },
  {
    path: 'cafes/:id',
    component: DisplayCafepageComponent
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
  HomeComponent, SignupComponent, DisplayPageComponent, DisplayCafepageComponent, DisplayAllcafesComponent
]