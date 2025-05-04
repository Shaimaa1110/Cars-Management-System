import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import Customer from '../models/customer.model';
import { UsersService } from './users.service';
import { User } from '../models/user.model';
import { UserType } from '../enums/user.enum';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customerUrl: string = "http://localhost:3000/customers";

  constructor(private http: HttpClient, private usersService: UsersService) { }

  // استرجاع جميع العملاء
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

  // إضافة عميل جديد
  addCustomer(newCustomer: Customer): Observable<object> {
    return this.http.get<Customer[]>(this.customerUrl).pipe(
      map(customers => {
        const existingCustomer = customers.find(c => c.email === newCustomer.email);
        if (existingCustomer) {
          throw new Error('العميل موجود بالفعل');
        }
        const user: User = {
          fullName: newCustomer.fullName,
          email: newCustomer.email,
          password: newCustomer.password,
          type: UserType.customer
        };
        return user;
      }),
      switchMap(user => {
        return forkJoin({
          customer: this.http.post<Customer>(this.customerUrl, newCustomer),
          user: this.usersService.add(user) // تأكد من وجود دالة `add` في `UsersService`
        });
      })
    );
  }

  // تحديث عميل
  updateCustomer(id: number, updatedCustomer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.customerUrl}/${id}`, updatedCustomer);
  }

  // حذف عميل
  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.customerUrl}/${id}`);
  }
}
