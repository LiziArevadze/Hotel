
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(name: string, lastname: string, email: string, password: string): Observable<any> {
    return this.http.post<any>('/api/account/register', { name, lastname, email, password });
  }
}
