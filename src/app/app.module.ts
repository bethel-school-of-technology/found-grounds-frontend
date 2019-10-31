import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Header, Footer, Login
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginmodalComponent } from './shared/components/loginmodal/loginmodal.component';

// Pages
import { AdminpageModule } from './modules/adminpages/adminpage.module';
import { ProfilepagesModule } from './modules/profilepages/profilepages.module';
import { DailybrewpageModule } from './modules/dailybrewpage/dailybrewpage.module';
import { CafepageModule } from './modules/cafepages/cafepage.module';
import { SignuppagesModule } from './modules/signuppages/signuppages.module';
import { LogoutmodalComponent } from './shared/components/logoutmodal/logoutmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginmodalComponent,
    LogoutmodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DailybrewpageModule,
    CafepageModule,
    AdminpageModule,
    ProfilepagesModule,
    SignuppagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
