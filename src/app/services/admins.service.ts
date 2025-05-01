import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  adminUrl:string="http://localhost:3000/admins";
  constructor(private http :HttpClient) { }
  getAdmins():Observable<Object>{
   return this.http.get(this.adminUrl)
  }
}
