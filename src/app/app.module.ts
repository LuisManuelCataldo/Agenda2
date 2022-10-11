import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRoutingModule } from './public/pages/home/home-routing.module';
import { SignInComponent } from './public/pages/sign-in/sign-in.component';
import { ContactCardComponent } from './public/components/contact-card/contact-card.component';
import { EditableInputComponent } from './public/components/editable-input/editable-input.component';
@NgModule({
  declarations: [
    AppComponent,
    EditableInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
