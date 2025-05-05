import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  adminUrl:string="http://localhost:3000/admins";
  constructor(private http :HttpClient) { }
  getAdmins(email:string,password:string):Observable<User|undefined>{
   //return this.http.get(this.adminUrl)
   return this.http.get<User[]|null>(this.adminUrl).pipe(map(users => users?.find(user=> user.email === email && user.password === password))
     );
  }











  
}
