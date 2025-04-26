import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: Customer[] = [];
  private currentCustomer: Customer = {} as Customer;
  private baseUrl = 'http://localhost:3000/customers'; 

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<Customer[]> {
    const result = this.customers.filter(c => c.email === email && c.password === password);
    if (result.length > 0) {
      this.currentCustomer = result[0];
    }
    return of(result);
  }

  signUp(customer: Customer): Observable<boolean> {
    this.customers.push(customer);
    return of(true);
  }

  getCurrentCustomer(): Customer {
    return this.currentCustomer;
  }

  updateLocalCustomer(updated: Customer): void {
    this.currentCustomer = { ...updated };
  }

  logout(): void {
    this.currentCustomer = {} as Customer;
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}/${id}`);
  }

  updateCustomerProfile(customerId: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.baseUrl}/${customerId}`, customer);
  }
}