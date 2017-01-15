import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/services/customer.service';
import { Customer } from '../../shared/models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    console.log('customer list comp');
    // TODO: Customer list should get customers from Customer main component
    this.customerService
      .getAllCustomers()
      .then(customers => this.customers = customers);
  }
}
