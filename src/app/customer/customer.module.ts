import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { customerRouting } from './customer-routing';

import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';


@NgModule({
  imports: [
    CommonModule,
    customerRouting
  ],
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerDeleteComponent
  ]
})
export class CustomerModule { }
