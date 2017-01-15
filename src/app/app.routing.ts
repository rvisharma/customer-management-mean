import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUserComponent } from './about/about-user/about-user.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/:username', component: AboutUserComponent },
  { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
