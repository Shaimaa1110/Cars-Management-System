import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-customer-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  customer: any = {};

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    const customerId = 1; 
    this.customerService.getCustomer(customerId).subscribe(data => {
      this.customer = data;
    });
  }

  updateCustomer(): void {
    this.customerService.updateCustomer(this.customer.id, this.customer).subscribe(data => {
      alert('تم تحديث بياناتك');
    });
  }
}
