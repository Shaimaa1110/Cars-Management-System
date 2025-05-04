import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CarsModule } from './components/cars/cars.module';
import { ClientsModule } from './components/clients/clients.module';
import { CustomersModule } from './components/customers/customers.module';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
   
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarsModule,
    ClientsModule,
    CustomersModule,
    SharedModule
  ],
  providers:[ HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
