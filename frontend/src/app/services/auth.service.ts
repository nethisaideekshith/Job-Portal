import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  // Import Observable from rxjs

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string; role: string }): Observable<any> {
    console.log(credentials);
      return this.http.post(`${this.apiUrl}login`,credentials)
  }
}
