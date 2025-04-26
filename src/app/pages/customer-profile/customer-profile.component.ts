import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  customer: Customer | null = null;  
  isLoading = false;
  errorMessage: string | null = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.fetchCustomerProfile();
  }

  fetchCustomerProfile(): void {
    this.isLoading = true;
    this.customerService.getCustomerById(1).subscribe({
      next: (data) => {
        console.log(' Customer loaded:', data);
        this.customer = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(' Error loading customer:', error);
        this.errorMessage = 'Failed to load customer data';
        this.isLoading = false;
      }
    });
  }

  updateProfile(): void {
    if (!this.customer || this.customer.id == null) {
      alert('Customer info is missing');
      return;
    }

    this.customerService.updateCustomerProfile(this.customer.id.toString(), this.customer)
      .subscribe({
        next: () => {
          alert('Updated successfully!');
        },
        error: (error) => {
          console.error(' Update error:', error);
          alert(' Update failed');
        }
      });
  }
}