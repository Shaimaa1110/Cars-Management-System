import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { User } from '../models/user.model';
import { UserType } from '../enums/user.enum';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clientUrl:string="http://localhost:3000/clients";
  constructor(private http :HttpClient, private usersService:UsersService) { }
  getClients(): Observable<Object>{
   return this.http.get(this.clientUrl)
  }
  
  addClient(newClient:Client , password:string):Observable<Object>{ 
      const user: User = {
      fullName: newClient.fullName,
      email: newClient.email,
      password:password,
      type: UserType.client
    }    
    

     return this.http.post(this.clientUrl,newClient),this.usersService.add(user)
      
    
    
   }

}