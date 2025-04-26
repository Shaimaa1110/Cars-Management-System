import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car, CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-details',
  standalone: false,
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss'
})
export class CarDetailsComponent {
  car!: Car;

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.carService.getCarById(id).subscribe(data => {
      this.car = data;
    });
  }
}


