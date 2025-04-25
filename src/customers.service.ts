import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Customer from '../models/customer.model';
import { Client } from '../models/client.model';
import { User } from '../models/user.model';
import { UserType } from '../enums/user.enum';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
   customerUrl:string="http://localhost:3000/customers";
  constructor(private http :HttpClient ,private usersService:UsersService) { }
  
  
    
  

  addCustomers(newCustomer:Customer ):Observable<Object>{

    
     const user: User = {
         fullName: newCustomer.fullName,
         email: newCustomer.email,
         password:newCustomer.password,
         type: UserType.customer
       }   
        return this.http.post(this.customerUrl,newCustomer),
        this.usersService.add(user)
      
       
   }
 
  
      
   
}
