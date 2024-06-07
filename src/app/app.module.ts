import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ExtendedComponent } from './extended/extended.component';


@NgModule({
  declarations: [
    AppComponent,
    ExtendedComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
