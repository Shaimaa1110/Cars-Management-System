import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
=======
>>>>>>> 8614823595ec1cad9289d30b814be829103ff806
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarsTypesComponent } from './components/cars-types/cars-types.component';
import { AddCarsComponent } from './components/add-cars/add-cars.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CarsDetailsComponent } from './components/cars-details/cars-details.component';

=======
import { RouterModule } from '@angular/router';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { MyRequestsComponent } from './components/my-requests/my-requests.component';
>>>>>>> 8614823595ec1cad9289d30b814be829103ff806

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SignupComponent,
    LoginComponent,
    ClientProfileComponent,
    UpdateProfileComponent,
    CarsListComponent,
    CarsTypesComponent,
    AddCarsComponent,
    AdminProfileComponent,CustomerProfileComponent,
    CarsDetailsComponent

=======
    CustomerProfileComponent,
    CarsListComponent,
    CarDetailsComponent,
    UpdateCustomerComponent,
    MyRequestsComponent
    

    
    
>>>>>>> 8614823595ec1cad9289d30b814be829103ff806
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    FormsModule
  ],
  providers:[ HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
    FormsModule,
    CommonModule,
    RouterModule,
    
    
    RouterModule.forRoot([])   

  ],
  providers:[ HttpClient],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
>>>>>>> 8614823595ec1cad9289d30b814be829103ff806
