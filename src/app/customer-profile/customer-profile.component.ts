import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';



@Component({
  selector: 'app-customer-profile',
  standalone: false,
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  customer: any = {};

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    const customerId = 1; 
    this.customerService.getCustomer(customerId).subscribe(data => {
      console.log('Customer data:', data);
      this.customer = data;
    });
  }

  updateCustomer(): void {
    this.customerService.updateCustomer(this.customer.id, this.customer).subscribe(data => {
      alert('تم تحديث بياناتك');
    });
  }
}
