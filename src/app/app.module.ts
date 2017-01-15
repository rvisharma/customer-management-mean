import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserService } from './shared/services/user.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';

// Routes
import { appRouting } from './app.routing';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUserComponent } from './about/about-user/about-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CustomerComponent,
    HomeComponent,
    NotFoundComponent,
    AboutUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
