import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const customerRoutes: Routes = [
  {
    path: '', component: CustomerComponent,
    children: [
      { path: '', component: CustomerListComponent },
      { path: 'add', component: CustomerAddComponent },
      { path: 'delete', component: CustomerDeleteComponent }
    ]
  }
];

export const customerRouting: ModuleWithProviders = RouterModule.forChild(customerRoutes);
