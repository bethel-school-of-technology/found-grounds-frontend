import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { FullprofilepageModule } from './modules/fullprofilepage/fullprofilepage.module'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullprofilepageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
