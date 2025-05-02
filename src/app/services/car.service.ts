import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'http://localhost:3000/cars';  // هنا قمت بتضمين البورت مباشرة

  constructor(private http: HttpClient) { }


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

getCarById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);

}





updateCar(id: number, carData: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/${id}`, carData);
}


deleteCar(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);

}
addCar(car: any) {
  return this.http.post<any>('http://localhost:3000/cars', car);
}

}


