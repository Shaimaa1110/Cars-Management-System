import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Customer from '../../../models/customer.model';
import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-update-customer',
  standalone: false,
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {
  customerForm!: FormGroup;
  customer!: Customer;


  constructor(
    private customerService:CustomersService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });

    this.customerService.getCustomer(1).subscribe(data => {
      this.customer = data;
      this.customerForm.patchValue({
        name: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address
      });
    });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const updatedCustomer = { ...this.customer, ...this.customerForm.value };
      this.customerService.updateCustomer(this.customer.id, updatedCustomer).subscribe(() => {
        alert('تم تحديث المعلومات بنجاح');
        this.router.navigate(['/customer-profile']);
      });
    }
  }
}
