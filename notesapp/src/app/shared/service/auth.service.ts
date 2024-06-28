import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const BASE_URL = ['http://localhost:8000']
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user:any) {
    return this.http.post(`${BASE_URL}/auth/register`,user);
  }

  login(user:any){
    return this.http.post(`${BASE_URL}/auth/login`,user);
  }

  logins(credentials: { email: string, password: string }): Observable<any> {
  
    return of(true);
  }
}