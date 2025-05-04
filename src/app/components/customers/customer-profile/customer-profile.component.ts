import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl:'./customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  customer: any = {};

  constructor(private customerService:CustomersService,private router:Router) {}

  ngOnInit(): void {
    const customerId = 1; 
    this.customerService.getCustomer(customerId).subscribe(data => {
      console.log('Customer data:', data);
      this.customer = data;
    });
  }

  updateCustomer(): void {
    this.customerService.updateCustomer(this.customer.id, this.customer).subscribe(data => {
     // alert('تم تحديث بياناتك');
     this.router.navigate(['/update-customer']);
    });
  }
}
