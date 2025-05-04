import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomersModule } from '../components/customers/customers.module';
import { CarsModule } from '../components/cars/cars.module';
import { CustomerProfileComponent } from '../components/customers/customer-profile/customer-profile.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent, 
    
  ],
  imports: [
    CommonModule,
   
    RouterModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
