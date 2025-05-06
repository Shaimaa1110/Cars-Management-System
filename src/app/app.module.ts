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
import { FormsModule } from '@angular/forms';
import { admin_Service } from './admin/serves.service';
import { ModelsComponent } from './admin/components/models/models.component';
import { HomepageComponent } from './admin/components/layout/homepage/homepage.component';
import { SidebarComponent } from './admin/components/layout/sidebar/sidebar.component';
import { HeaderComponent } from './admin/components/layout/header/header.component';
import { AcceptComponent } from './admin/components/accept/accept.component';
import { ClientComponent } from './admin/components/client/client.component';
import { AdminModule } from './admin/modules/admin.module';
import { RoutingAdminModule } from './admin/modules/routing-admin.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    
    /*HomepageComponent,
    SidebarComponent,
    HeaderComponent,
    AcceptComponent,
    ClientComponent,
    ModelsComponent*/
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
    SharedModule,
    FormsModule,
    AdminModule,
    RoutingAdminModule 
  ],
  providers:[ HttpClient,admin_Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
