import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { MyRequestsComponent } from './components/my-requests/my-requests.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';


 

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },  
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'customer-profile', component: CustomerProfileComponent },
  { path: 'my-requests', component: MyRequestsComponent }, 
  {path: 'car-list',component:CarListComponent},
  {path:'car-details',component:CarDetailsComponent},   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]                   
})
export class AppRoutingModule { }
