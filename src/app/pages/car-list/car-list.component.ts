import { Component } from '@angular/core';
import { Car, CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent {
  cars: Car[]=[
    {
      id: 1,
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      price: 15000,
      image: 'toyota-corolla-2020.jpg'
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      year: 2023,
      price: 22000,
      image: 'honda-civic-2023.jpg'
    }
  ];

  constructor (private carService:CarService) {}
   
  ngOnInit (): void {
    this.carService.getAllCars().subscribe(data => {
      this.cars = data;
    });
  

  }
}
