import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingClientsModule } from './app-routing-clients.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ClientProfileComponent,
    UpdateProfileComponent,
    MyRequestsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingClientsModule,
    ReactiveFormsModule
  ],
  exports:[
    ClientProfileComponent,
    UpdateProfileComponent,
    MyRequestsComponent
  ]
})
export class ClientsModule { }
