import { Component } from '@angular/core';
import { ValidatorsService } from '../../validators.service';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../../services/customers.service';


@Component({
  selector: 'app-signup',
  standalone:false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
 
  constructor(public validatorsService: ValidatorsService,private customersService:CustomersService) {
    
  }
 

  genders = [
    { key: 'male', label: 'Male' },
    { key: 'female', label: 'Female' }
  ]
  countries = [
    { key: 'Jordan', label: 'Jordan' },
    { key: 'Syria', label: ' Syria' },
    { key: 'libanon', label: ' libanon' },
    { key: 'Iraq', label: ' Iraq' },
    { key: 'Palastin', label: 'Palastin ' },
    { key: 'Egept', label: ' Egept' },
    { key: 'Libea', label: 'Libea' },
    { key: 'India', label: ' India' },
    { key: 'Yemen', label: ' Yemen' },
    { key: 'Saudi Arabia', label: 'Saudi Arabia' },
    { key: 'Algeria', label: 'Algeria' },


  ]
  cities = [
    { key: 'Amman,Jor', label: 'Amman,Jor' },
    { key: 'Damascus,Syr', label: 'Damascus,Syr' },
    { key: 'Roche,lib', label: ' Roche,lib' },
    { key: 'Baghdad,Iraq', label: 'Baghdad,Iraq' },
    { key: 'Nablus,Palas', label: 'Nablus,Palas' },
    { key: 'Alexandria,Eg', label: 'Alexandria,Eg' },
    { key: 'Riyadh,Saudi', label: 'Riyadh,Saudi' }

  ]
  
  

  

  
  
  formNameMapper:{ [key: string]: string } = {
    fullName: 'Full Name',
    email: 'Email Address',
    password: 'Password',
    conferm_password: 'conferm-password',
    phone:'phone',
    registrationDate: 'Registration Date',
    gender: 'Gender',
    terms: 'Term and Conditions',
    
  }

  formGroup: FormGroup = this.initFormGroup();
  errors: string[] = [];
  initFormGroup():FormGroup{
    return new FormGroup ({
      fullName: new FormControl('', Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('', Validators.required),
      conferm_password: new FormControl('', Validators.required),
      phone:new FormControl('',[Validators.required,Validators.min(10)]),
      registrationDate: new FormControl(''),
      gender: new FormControl('', Validators.required),
      terms: new FormControl(''),
      address: new FormGroup({
        country: new FormControl(''),
        city: new FormControl(''),
        street: new FormControl(''),
        
      }),
    });

  }
   data={
    fullName:'',
    email:'',
    password:'',
    conferm_password:'',
    phone:null,
    registrationDate:null,
    gender:'',
    terms:null,
    country:'',
    city:'',
    street:''
  }

  onSubmit():void {
    this.formGroup.markAllAsTouched();
    this.errors.length = 0;
    if (!this.formGroup.valid) { // form group invalid
      Object.keys(this.formGroup.controls).forEach((key: string) => {
        const name = this.formNameMapper[key];
        if (this.formGroup.controls[key].errors?.['required']) {
          this.errors.push(`${name} is required`)
        }
        else if (this.formGroup.controls[key].errors?.['email']) {
          this.errors.push(`${name} is invalid email`)
        }
        
      })
    }else { //this form group valid
     
       this.customersService.addCustomers(this.data).subscribe(
        (data:any)=>{
          alert("Singup success.");

        },
        (error:any)=>{
          alert('Signup failed.');
        }
       )
      
    }
  }

  

  checkValidValue(fieldName: string): boolean {
    return this.formGroup.controls[fieldName].touched && this.formGroup.controls[fieldName].valid
  }

  checkNotValidValue(fieldName: string): boolean {
    return this.formGroup.controls[fieldName].touched && !this.formGroup.controls[fieldName].valid
  }
}

