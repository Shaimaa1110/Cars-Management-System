import { NgModule } from '@angular/core';
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
import { HomepageComponent } from './admin/components/layout/homepage/homepage.component';
import { AcceptComponent } from './admin/components/accept/accept.component';
import { ClientComponent } from './admin/components/client/client.component';

import { ModelsComponent } from './admin/components/models/models.component';


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
    path:'admin-home', component:HomepageComponent,children:[{
      path: '',
      pathMatch:'full',
      redirectTo: 'accept'
  
    },{path:'vew_client',component:ClientComponent},
      { path: 'accept', component:AcceptComponent  },
     
      { path: 'models', component: ModelsComponent }
     
 ]
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
})
export class AppRoutingModule { }
