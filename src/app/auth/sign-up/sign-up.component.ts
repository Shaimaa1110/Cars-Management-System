import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
   imports: [CommonModule, FormsModule],
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  customer = {
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  };

  constructor(private customerService: CustomerService, private router: Router) {}

  signUp() {
    if (Object.values(this.customer).some(v => v === '')) {
      alert('Please fill all fields.');
      return;
    }

    this.customerService.signUp(this.customer).subscribe(() => {
      alert('Sign up successful!');
      this.router.navigate(['/auth/sign-in']);
    });
  }
}
