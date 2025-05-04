import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserType } from '../enums/user.enum';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/'; // قاعدة URL

  constructor(private http: HttpClient) {}

  // دالة لجلب بيانات المستخدم حسب البريد الإلكتروني وكلمة المرور
  getUser(email: string, password: string): Observable<{ type: UserType; user: User } | undefined> {
    // جلب بيانات المستخدمين من الـ API بناءً على نوع المستخدم
    const clients$ = this.http.get<any[]>(`${this.apiUrl}clients`).pipe(
      map(users => users.find(u => u.email === email && u.password === password)
        ? { type: UserType.client, user: users.find(u => u.email === email && u.password === password) }
        : undefined),
      catchError(() => of(undefined))
    );

    const admins$ = this.http.get<any[]>(`${this.apiUrl}admins`).pipe(
      map(users => users.find(u => u.email === email && u.password === password)
        ? { type: UserType.admin, user: users.find(u => u.email === email && u.password === password) }
        : undefined),
      catchError(() => of(undefined))
    );

    const customers$ = this.http.get<any[]>(`${this.apiUrl}customers`).pipe(
      map(users => users.find(u => u.email === email && u.password === password)
        ? { type: UserType.customer, user: users.find(u => u.email === email && u.password === password) }
        : undefined),
      catchError(() => of(undefined))
    );

    // دمج جميع الطلبات مع إعطاء الأولوية للأقرب
    return new Observable(observer => {
      clients$.subscribe(client => {
        if (client) {
          observer.next(client);
          observer.complete();
        } else {
          admins$.subscribe(admin => {
            if (admin) {
              observer.next(admin);
              observer.complete();
            } else {
              customers$.subscribe(customer => {
                if (customer) {
                  observer.next(customer);
                  observer.complete();
                } else {
                  observer.next(undefined);
                  observer.complete();
                }
              });
            }
          });
        }
      });
    });
  }

  // دالة لاسترجاع بيانات العميل فقط
  getCustomerData(email: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}customers`).pipe(
      map(users => users.find(u => u.email === email)),
      catchError(() => of(undefined))
    );
  }

  // دالة لإضافة مستخدم جديد
  add(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}users`, user).pipe(
      catchError(error => {
        console.error('Error adding user:', error);
        throw error; // إعادة الخطأ لتعامل آخر
      })
    );
  }
}
