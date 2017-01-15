import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { AboutListComponent } from './about-list/about-list.component';

import { NotFoundComponent } from '../shared/not-found/not-found.component';

const aboutRoutes: Routes = [
  {
    path: '', component: AboutComponent,
    children: [
      { path: '', component: AboutListComponent },
      { path: '404', component: NotFoundComponent },
      { path: ':username', component: AboutUserComponent }]
  }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
