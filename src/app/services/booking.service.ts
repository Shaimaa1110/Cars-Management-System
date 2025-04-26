import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



export interface Booking{
  id: number;
  customerId: number;
  carId: number;
  status: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:3000/bookings';

  constructor(private http: HttpClient) { }


  bookCar(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.apiUrl, booking);
}
getBookingsByCustomer(customerId: number): Observable<Booking[]> {
  return this.http.get<Booking[]>(`${this.apiUrl}?customerId=${customerId}`);
}
}