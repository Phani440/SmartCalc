import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DeductionsComponent } from './deductions/deductions.component';
import { PayComponent } from './pay/pay.component';
import { MainComponent } from './main/main.component';
import { AddcomponentComponent } from './addcomponent/addcomponent.component';
import { CodeComponent } from './code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DeductionsComponent,
    PayComponent,
    MainComponent,
    AddcomponentComponent,
    CodeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
