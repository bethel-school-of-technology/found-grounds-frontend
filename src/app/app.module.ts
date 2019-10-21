import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { DailybrewpageModule } from './modules/dailybrewpage/dailybrewpage.module';
import { UserprofileModule } from './modules/userprofilepages/userprofile.module';
import { CafepageModule } from './modules/cafepage/cafepage.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginmodalComponent } from './shared/components/loginmodal/loginmodal.component';
import { AdminpageModule } from './modules/adminpage/adminpage.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginmodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DailybrewpageModule,
    CafepageModule,
    UserprofileModule,
    AdminpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
