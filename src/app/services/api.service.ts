import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://ketiketelauri123-001-site1.jtempurl.com/api/Search'; 

  constructor(private http: HttpClient) { }

  searchRooms(requestBody: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.apiUrl, requestBody, { headers: headers });
  }
}
