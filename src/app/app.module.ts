import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ExtendedComponent } from './extended/extended.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExtendedComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    HttpClientModule,
    InputTextareaModule,
    FormsModule,
    InputTextareaModule,
    CardModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
