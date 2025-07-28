import { Component } from '@angular/core';
import { ValidatorsService } from '../../validators.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../../services/customers.service';
import { Client } from '../../models/client.model';
import { ClientsService } from '../../services/clients.service';
import { UserType } from '../../enums/user.enum';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(
    public validatorsService: ValidatorsService,

  ) { }
  genders = [
    { key: 'male', label: 'Male' },
    { key: 'female', label: 'Female' }
  ];

  countries = [
    { key: 'Jordan', label: 'Jordan' },
    { key: 'Syria', label: 'Syria' },
    { key: 'Lebanon', label: 'Lebanon' },
    { key: 'Iraq', label: 'Iraq' },
    { key: 'Palestine', label: 'Palestine' },
    { key: 'Egypt', label: 'Egypt' },
    { key: 'Libya', label: 'Libya' },
    { key: 'India', label: 'India' },
    { key: 'Yemen', label: 'Yemen' },
    { key: 'Saudi Arabia', label: 'Saudi Arabia' },
    { key: 'Algeria', label: 'Algeria' },
  ];

  cities = [
    { key: 'Amman', label: 'Amman, Jordan' },
    { key: 'Damascus', label: 'Damascus, Syria' },
    { key: 'Beirut', label: 'Beirut, Lebanon' },
    { key: 'Baghdad', label: 'Baghdad, Iraq' },
    { key: 'Nablus', label: 'Nablus, Palestine' },
    { key: 'Alexandria', label: 'Alexandria, Egypt' },
    { key: 'Riyadh', label: 'Riyadh, Saudi Arabia' }
  ];

  formNameMapper: { [key: string]: string } = {
    fullName: 'Full Name',
    email: 'Email Address',
    password: 'Password',
    confirm_password: 'Confirm Password',
    phone: 'Phone',
    registrationDate: 'Registration Date',
    gender: 'Gender',
    terms: 'Terms and Conditions',
    country: 'Country',
    city: 'City',
    street: 'Street',
    role: 'Role',
  };

  formGroup: FormGroup = this.initFormGroup();
  errors: string[] = [];
  customersService: any;
  clientService: any;

  initFormGroup(): FormGroup {
    return new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.min(10)]),
      registrationDate: new FormControl(''),
      gender: new FormControl(''),
      terms: new FormControl(''),
      address: new FormGroup({
        country: new FormControl(''),
        city: new FormControl(''),
        street: new FormControl(''),
      }),
      role: new FormControl('', Validators.required),
    }, [this.passwordMatchValidator]);
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirm_password')?.value;
    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }



  customer: Client = {
    fullName: '',
    email: '',
    password: '',
    confirm_password: '',
    phone: null,
    registrationDate: null,
    gender: '',
    terms: null,
    country: '',
    city: '',
    street: '',
    role: UserType.customer,
    address: undefined
  };

  client: Client = {
    fullName: '',
    email: '',
    password: '',
    confirm_password: '',
    phone: null,
    registrationDate: null,
    gender: '',
    terms: null,
    country: '',
    city: '',
    street: '',
    address: {
      country: '',
      city: '',
      street: ''
    },
    role: UserType.client
  };



  onSubmit(): void {
    this.formGroup.markAllAsTouched();
    this.errors = [];  // تنظيف الأخطاء

    if (!this.formGroup.valid) {
      Object.keys(this.formGroup.controls).forEach((key: string) => {
        const name = this.formNameMapper[key];
        if (this.formGroup.controls[key].errors?.['required']) {
          this.errors.push(`${name} is required`);
        } else if (this.formGroup.controls[key].errors?.['email']) {
          this.errors.push(`${name} is invalid email`);
        }
      });
    } else {
      const formData = this.formGroup.value;
      if (formData.role === UserType.customer) {
        //this.customer = { ...formData, role: UserType.customer };
        this.customer = {
  fullName: formData.fullName,
  email: formData.email,
  password: formData.password,
  confirm_password: formData.confirm_password,
  phone: formData.phone,
  registrationDate: formData.registrationDate,
  gender: formData.gender,
  terms: formData.terms,
  address: {
    country: formData.address.country,
    city: formData.address.city,
    street: formData.address.street
  },
  role: UserType.customer,
};

        this.customersService.addCustomers(this.customer).subscribe({
          next: (data: any) => {
            alert("Signup success.");
          },
          error: (error: any) => {
            alert('Signup failed.');
          }
        });
      } else if (formData.role === UserType.client) {
        //this.client = { ...formData, role: UserType.client };
         this.client = {
  fullName: formData.fullName,
  email: formData.email,
  password: formData.password,
  confirm_password: formData.confirm_password,
  phone: formData.phone,
  registrationDate: formData.registrationDate,
  gender: formData.gender,
  terms: formData.terms,
  address: {
    country: formData.address.country,
    city: formData.address.city,
    street: formData.address.street
  },role: UserType.client };
        this.clientService.addClient(this.client).subscribe({
          next: (data: any) => {
            alert("Signup success.");
          },
          error: (error: any) => {
            alert('Signup failed.');
          }
        });
      }
    }
  }

  checkValidValue(fieldName: string): boolean {
    return this.formGroup.controls[fieldName].touched && this.formGroup.controls[fieldName].valid;
  }

  checkNotValidValue(fieldName: string): boolean {
    return this.formGroup.controls[fieldName].touched && !this.formGroup.controls[fieldName].valid;
  }
}
