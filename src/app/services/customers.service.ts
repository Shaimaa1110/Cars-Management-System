import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import Customer from '../models/customer.model';

import { User } from '../models/user.model';
import { UserType } from '../enums/user.enum';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
   customerUrl:string="http://localhost:3000/customers";
  constructor(private http :HttpClient ,private usersService:UsersService) { }
  
  
  

  addCustomers(newCustomer:Customer ):Observable<object>{
  
  
     const user: User = {
         fullName: newCustomer.fullName,
         email: newCustomer.email,
         password:newCustomer.password,
         type: UserType.customer
       }
        return forkJoin({
          customer: this.http.post<Customer>(this.customerUrl,newCustomer),
           user:this.usersService.add(user)
  })
   }
 
   updateCustomer(id: number, updatedCustomer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.customerUrl}/${id}`, updatedCustomer);
  }


  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.customerUrl}/${id}`);
  }
    
  getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.customerUrl}/${id}`);
  }

  getCustomerData(email: string): Observable<any> {
  return this.http.get<Customer[]>(this.customerUrl)
  .pipe(map(customers => customers?.find(customer=> customer.email === email))
  )
  }

   
}
