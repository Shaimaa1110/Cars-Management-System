import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable()
export class admin_Service {
  
    
 
 user_name="";
 

  constructor(private http:HttpClient) {}
  get_data(collectionName: string): Observable<any> {
    return this.http.get(`http://localhost:3000/${collectionName}`);
  }
 post_accept(data:any):Observable<any>{
  return this.http.post('http://localhost:3000/users',data);
   }
   get_model():Observable<any>{
    return this.http.get('http://localhost:3000/car_model');
     }
   add_model(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/car_model',data);
     }
    dalete_users(dat:any):Observable<any>{
      return this.http.delete(`http://localhost:3000/clients`+`/`+dat);
       }
       dalete_model(dat:any):Observable<any>{
        return this.http.delete(`http://localhost:3000/car_model`+`/`+dat);
         }
     
}
