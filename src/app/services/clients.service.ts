import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { User } from '../models/user.model';
import { UserType } from '../enums/user.enum';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private clientUrl: string = "http://localhost:3000/clients";

  constructor(private http: HttpClient, private usersService: UsersService) {}

  // ✅ تسجيل الدخول للعميل بالتحقق من الإيميل وكلمة المرور
  getClients(): Observable<Client | undefined> {
    const email = localStorage.getItem('userEmail');
    const password = localStorage.getItem('userPassword');

    return this.http.get<Client[]>(this.clientUrl).pipe(
      map(clients =>
        clients.find(client => client.email === email && client.password === password)
      )
    );
  }

  // ✅ إضافة عميل جديد
  addClient(newClient: Client): Observable<Object> {
    const user: User = {
      fullName: newClient.fullName,
      email: newClient.email,
      password: newClient.password,
      type: UserType.client,
      address: newClient.address,
    };

    return forkJoin({
      customer: this.http.post<Client>(this.clientUrl, newClient),
      user: this.usersService.add(user),
    });
  }

  // ✅ جلب بيانات العميل باستخدام الإيميل
  getClientByEmail(email: string): Observable<Client | null> {
    return this.http.get<Client[]>(`${this.clientUrl}?email=${email}`).pipe(
      map(clients => clients.length > 0 ? clients[0] : null)
    );
  }

  // ✅ تحديث بيانات العميل
  updateClient(id: string, updatedData: Partial<Client>): Observable<any> {
    return this.http.put(`${this.clientUrl}/${id}`, updatedData);
  }
}
