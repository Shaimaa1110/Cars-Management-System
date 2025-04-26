import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  standalone: true,  
  imports: [CommonModule, FormsModule],
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  
})
export class SignInComponent {
  email = '';
  password = '';
  authService: any;
  

  constructor(private customerService: CustomerService, private router: Router) {}

  signIn() {
    this.authService.signIn(this.email, this.password).subscribe((customers: Customer[]) => {
      if (customers.length > 0) {
        const customer = customers[0];
        alert(`Welcome, ${customer.name}`);
        this.authService.setCurrentCustomer(customer);
        this.router.navigate(['/profile']); 
      } else {
        alert('Incorrect email or password.');
      }
    });
  }
}