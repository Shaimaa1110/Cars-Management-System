import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import { Car } from '../models/car.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})

  export class CarsListComponent implements OnInit {
    cars: Car[] = [];
  
    constructor(private carService: CarService, private router: Router) {}
  
    ngOnInit(): void {
      this.carService.getCars().subscribe((data: Car[]) => {
        this.cars = data;
      });
    }
  
    viewCarDetails(carId: number): void {
      this.router.navigate(['/car-details', carId]);
    }
  }