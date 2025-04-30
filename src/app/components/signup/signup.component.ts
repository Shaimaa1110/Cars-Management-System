import { Component, OnInit } from '@angular/core';
import { ValidatorsService } from '../../validators.service';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../../services/customers.service';
import Customer from '../../models/customer.model';
import { UserType } from '../../enums/user.enum';
import { Client } from '../../models/client.model';
import { ClientsService } from '../../services/clients.service';
import { LookupService } from '../../services/lookup.service';
import { Lookup } from '../../models/lookup.model';
import { LookupEnum } from '../../enums/lookup.enum';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-signup',
  standalone:false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{
  countries!:Lookup[]
  cities!:Lookup[]
  lookups: string[] = [];
   id!:Lookup;
  name!:Lookup 
  parentId!:Lookup
  
  constructor( public validatorsService: ValidatorsService,private httpClient:HttpClient,private customersService:CustomersService,private clientService:ClientsService,private lookupService:LookupService) {
    
  }
  
  ngOnInit():void {
    
    this.lookupService.getAll(LookupEnum.country).subscribe(
      (data:any)=>{
        this.countries=data;
      },
      (error:any)=>{
        console.log(error)
      }
    )
  
    
  }
  countryChange(country:string):void{
    this.cities=[]
    this.lookupService.getAll(LookupEnum.city,country).subscribe(
      (data:any)=>{
        this.cities=data;
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  

  
 

  genders = [
    { key: 'male', label: 'Male' },
    { key: 'female', label: 'Female' }
  ]
  
  
  
  formNameMapper:{ [key: string]: string } = {
    fullName: 'Full Name',
    email: 'Email Address',
    password: 'Password',
    confirm_password: 'confirm-password',
    phone:'phone',
    registrationDate: 'Registration Date',
    gender: 'Gender',
    terms: 'Term and Conditions'
    
  }
  

  formGroup: FormGroup = this.initFormGroup();
  errors: string[] = [];
  initFormGroup():FormGroup{
    return new FormGroup ({
      fullName: new FormControl('', Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required ,Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$')]),

      confirm_password: new FormControl('', Validators.required),
      phone:new FormControl('',[Validators.required,Validators.min(10)]),
      registrationDate: new FormControl(''),
      gender: new FormControl(''),
      terms: new FormControl(''),
      address: new FormGroup({
        country: new FormControl(''),
        city: new FormControl(),
        street: new FormControl(''),
       
       
     
      }),
      role:new FormControl(''),
    });

  }
   
 customer:Customer={
    fullName:'',
    email:'',
    password:'',
    confirm_password:'',
    phone:null,
    registrationDate:null,
    gender:'',
    terms:null,
    country:'',
    city:'',
    street:'',
    role:UserType.customer
  }
  client:Client={
    fullName:'',
    email:'',
    password:'',
    confirm_password:'',
    phone:null,
    registrationDate:null,
    gender:'',
    terms:null,
    country:'',
    city:'',
    street:'',
    role:UserType.client
  }
  onSubmit():void {
    this.formGroup.markAllAsTouched();
    this.errors.length = 0;
    if (!this.formGroup.valid) { // form group invalid
      Object.keys(this.formGroup.controls).forEach((key: string) => {
        const name = this.formNameMapper[key];
        if (this.formGroup.controls[key].errors?.['required']){
          this.errors.push(`${name} is required`)
        }
        else if (this.formGroup.controls[key].errors?.['email']) {
          this.errors.push(`${name} is invalid email`)
         
      }} )
  }else { //this form group valid
      this.customer=this.formGroup.value;
      this.client=this.formGroup.value;
      console.log(this.customer);
        if(this.customer.role === UserType.customer){
       this.customersService.addCustomers(this.customer).subscribe({
        next:(data:any)=>{
          console.log(data);
          alert("Singup success.");
        },
        error:(error:any)=>{
          alert('Signup failed.');
        }
    });
     }else if(this.client.role === UserType.client){
      this.clientService.addClient(this.client).subscribe({
        next:(data:any)=>{
          alert("Singup success.");
        },
        error:(error:any)=>{
          alert('Signup failed.');
        }
    });
     }
    }
  }

  
  
  checkValidValue(fieldName: string): boolean {
    return this.formGroup.controls[fieldName].touched && this.formGroup.controls[fieldName].valid
  }

  checkNotValidValue(fieldName: string): boolean {
    return this.formGroup.controls[fieldName].touched && !this.formGroup.controls[fieldName].valid
  }
}

