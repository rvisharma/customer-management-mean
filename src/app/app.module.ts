import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

// Routes
import { appRouting } from './app.routing';

// Component
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  //  ReactiveFormsModule,
    SharedModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   *
   */
  constructor() {
    console.log('app module started');
  }
 }
