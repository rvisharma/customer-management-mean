import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Customer } from '../../shared/models/customer';
import { CustomerService } from '../../shared/services/customer.service'


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  addCustomerFormGroup: FormGroup;
  submit: boolean;
  validationMessages = {
    name: {
      required: 'Name is required'
    },
    email: {
      required: 'Email is required'
    }
  };

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) { }
  ngOnInit() {
    this.addCustomerFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  formSubmit = () => {
    this.submit = true;
    if (this.addCustomerFormGroup.invalid) {
      return;
    }

    this.addCustomer(this.addCustomerFormGroup.value as Customer)
      .then(customers => {
        // reset the form
        this.addCustomerFormGroup.reset();
        this.submit = false;

        this.router.navigate(['/customer']);

      });

  }

  addCustomer = (customer: Customer) => {
    return this.customerService.addCustomer(customer);
  }

}
