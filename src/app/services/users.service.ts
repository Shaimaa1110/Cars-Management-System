import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {  map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersUrl="http://localhost:3000/users";
  constructor(private http :HttpClient) { }

  
  add(user: User): Observable<Object> {
    return this.http.post<User>(this.usersUrl,user);
  
}

getUser(email: string, password?: string):  Observable<User|undefined> {
 
  
 return this.http.get<User[]>(this.usersUrl).pipe(map(users => users?.find(user=> user.email === email && user.password === password))
  )
    
    
    
    
     
 
  
}}