
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = '/api/account/login';
  private registerUrl = '/api/account/register';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Promise<any> {
    return this.http.post(this.loginUrl, { email, password }).toPromise();
  }

  register(name: string, lastname: string, email: string, password: string): Promise<any> {
    return this.http.post(this.registerUrl, { name, lastname, email, password }).toPromise();
  }
}
