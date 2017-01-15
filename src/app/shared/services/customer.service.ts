import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

const customers: Customer[] = [
  new Customer('Ravi Sharma', 'rvi@gmail.com', 1),
  new Customer('Crime Master Gogo', 'cmg@cmg.com', 2)
];

@Injectable()
export class CustomerService {

  constructor() {
    console.log('customer service started');
  }

  getAllCustomers = () => {
    return Promise.resolve(customers);
  }

  addCustomer = (customer: Customer) => {
    if (!customer.id) { customer.id = Date.now(); }

    customers.push(customer);
    return this.getAllCustomers();
  }

}
