import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/customers'; 

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}?email=${email}&password=${password}`);
  }

  signUp(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  getCurrentCustomer(): Customer | null {
    const customer = localStorage.getItem('customer');
    return customer ? JSON.parse(customer) : null;
  }

  setCurrentCustomer(customer: Customer): void {
    localStorage.setItem('customer', JSON.stringify(customer));
  }

  signOut(): void {
    localStorage.removeItem('customer');
  }
}
