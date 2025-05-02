import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarsComponent } from './add-cars/add-cars.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsTypesComponent } from './cars-types/cars-types.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingCarsModule } from './app-routing-cars.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    AddCarsComponent,
    CarsListComponent,
    CarsTypesComponent,
    CarsDetailsComponent
  ],
  imports: [
    CommonModule,
   SharedModule,
    BrowserModule,
    FormsModule,
    AppRoutingCarsModule,
    ReactiveFormsModule

  ],
  exports:[
    AddCarsComponent,
    CarsListComponent,
    CarsTypesComponent,
    CarsDetailsComponent
  ]
})
export class CarsModule { }
