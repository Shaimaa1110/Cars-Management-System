import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) {}

  getCars(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCarDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  bookCar(id: number, carData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, carData);
  }

  getMyRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/requests/my`);
  }
}
