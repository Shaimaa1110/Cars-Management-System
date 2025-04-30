import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';


@Component({
  selector: 'app-car-details',
  standalone: false,
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  car: any;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.carService.getCarDetails(id).subscribe(data => {
      this.car = data;
    });
  }

  bookCar(): void {
    if (this.car.available) {
      this.car.available = false;
      this.carService.bookCar(this.car.id, this.car).subscribe(() => {
        alert('تم حجز السيارة بنجاح');
      });
    } else {
      alert('السيارة محجوزة بالفعل');
    }
  }
}
