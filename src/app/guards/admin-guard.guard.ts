import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Admin } from '../models/admin.model';
import {  map, Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class CanActivateAdmin implements CanActivate {
  adminsUrl:string="http://localhost:3000/admins";
  currentAdmin!:any
  constructor(private http:HttpClient){} 

  getAdmin(email: string, password?: string):  Observable<Admin|undefined> {
      this. currentAdmin= this.http.get<Admin[]|null>(this.adminsUrl).pipe(map(admins => admins?.find(admin=> admin.email === email && admin.password === password))
  );
  return this.currentAdmin;
    }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(!this.currentAdmin){
     return false;
    }
 
  return true;
  
   
  
  
}}
