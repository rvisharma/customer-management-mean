import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { aboutRouting } from './about.routing';

import { AboutComponent } from './about.component';
import { AboutListComponent } from './about-list/about-list.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { UserService } from '../shared/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    aboutRouting
  ],
  declarations: [
    AboutComponent,
    AboutListComponent,
    AboutUserComponent
  ],
  providers: [
    UserService
  ]
})
export class AboutModule { }
