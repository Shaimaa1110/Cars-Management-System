import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

const routes: Routes = [
   
  { path: 'cars-list',component: CarsListComponent},
  { path: 'car-details/:id', component: CarDetailsComponent },
  { path: 'customer-profile', component: CustomerProfileComponent },
  { path: '', redirectTo: '/cars-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
