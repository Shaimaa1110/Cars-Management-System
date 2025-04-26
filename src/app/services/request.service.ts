import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class RequestService {
  private api = 'http://localhost:3000/requests';

  constructor(private http: HttpClient) {}

  createRequest(request: Request) {
    return this.http.post<Request>(this.api, request);
  }

  getRequestsByUser(customerId: number) {
    return this.http.get<Request[]>(`${this.api}?customerId=${customerId}`);

  }
}