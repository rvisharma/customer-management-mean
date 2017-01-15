import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomerService } from '../shared/services/customer.service';

import { customerRouting } from './customer-routing';

import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerListItemComponent } from './customer-list-item/customer-list-item.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    customerRouting
  ],
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerDeleteComponent,
    CustomerListItemComponent
  ],
  providers: [
    CustomerService
  ]
})
export class CustomerModule {
  /**
   *
   */
  constructor() {
    console.log('customer module started');
  }
}
