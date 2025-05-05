import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {  catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserType } from '../enums/user.enum';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersUrl="http://localhost:3000/users";
   apiUrl = 'http://localhost:3000/';
  constructor(private http :HttpClient) { }

  
  add(user: User): Observable<Object> {
    return this.http.post<User>(this.usersUrl,user);
  
}

getUsers(email: string, password?: string):  Observable<User|undefined> {
 
  
 return this.http.get<User[]>(this.usersUrl).pipe(map(users => users?.find(user=> user.email === email && user.password === password))
) 
}


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



}




