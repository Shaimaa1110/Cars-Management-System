import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-list',
  standalone:false,
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
  fuelTypes: string[] = [
    'Hybrid', 'Diesel', 'Electric', 'Petrol'
  ];

  constructor(private router: Router) {}

  showCarsByFuelType(type: string) {
    this.router.navigate(['/cars-types'], { queryParams: { fuel: type } });
  }
}
