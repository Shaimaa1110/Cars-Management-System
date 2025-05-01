import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { AddCarsComponent } from './components/add-cars/add-cars.component';
import { CarsTypesComponent } from './components/cars-types/cars-types.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CarsDetailsComponent } from './components/cars-details/cars-details.component';

const routes:Routes=[
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'login'

  },
  {
    path:'login',
    component:LoginComponent
  },
  {

    path:'signup',
    component:SignupComponent
  },
  {path:'client-profile',component:ClientProfileComponent},
  {
    path:'client-update',
    component: UpdateProfileComponent

  },
  {
    path:'cars-list', component:CarsListComponent
  },
  {
    path:'add-cars', component:AddCarsComponent
  },{ path: 'cars-types', component: CarsTypesComponent },
  {
    path:'admin-profile', component:AdminProfileComponent
  },
  {
    path:'customer-profile', component:CustomerProfileComponent
  },
  {path:'cars-details/:id',component:CarsDetailsComponent
  }
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
=======
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { MyRequestsComponent } from './components/my-requests/my-requests.component';

const routes: Routes = [
   
  { path: 'cars-list',component: CarsListComponent},
  { path: 'car-details/:id', component: CarDetailsComponent },
  { path: 'customer-profile', component: CustomerProfileComponent },
  { path: 'update-customer', component: UpdateCustomerComponent },
  { path: 'my-requests', component: MyRequestsComponent },
  { path: '', redirectTo: '/cars-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
>>>>>>> 8614823595ec1cad9289d30b814be829103ff806
})
export class AppRoutingModule { }
