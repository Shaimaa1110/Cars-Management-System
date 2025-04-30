import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
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
 
  
      
   
}
