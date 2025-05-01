import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarsTypesComponent } from './components/cars-types/cars-types.component';
import { AddCarsComponent } from './components/add-cars/add-cars.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CarsDetailsComponent } from './components/cars-details/cars-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ClientProfileComponent,
    UpdateProfileComponent,
    CarsListComponent,
    CarsTypesComponent,
    AddCarsComponent,
    AdminProfileComponent,CustomerProfileComponent,
    CarsDetailsComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[ HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
