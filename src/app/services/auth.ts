import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterRequest, LoginRequest } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private baseUrl = 'https://localhost:7040/api/Auth';

  constructor(private http: HttpClient) {}

  register(data: RegisterRequest) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data: LoginRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}
