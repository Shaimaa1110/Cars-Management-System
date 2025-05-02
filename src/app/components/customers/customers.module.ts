import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingCustomersModule } from './app-routing-customers.module';
import { SharedModule } from '../../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CustomerProfileComponent,
    UpdateCustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    SharedModule,
    AppRoutingCustomersModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    CustomerProfileComponent,
    UpdateCustomerComponent
  ],
})
export class CustomersModule { }
