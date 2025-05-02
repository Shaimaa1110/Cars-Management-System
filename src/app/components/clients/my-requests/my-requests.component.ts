import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../services/car.service';



@Component({
  selector: 'app-my-requests',
  standalone: false,
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})
export class MyRequestsComponent implements OnInit {
  requests: any[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getMyRequests().subscribe(data => {
      this.requests = data;
    });
  }
}
