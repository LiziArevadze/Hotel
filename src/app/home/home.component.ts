import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private apiService: ApiService) {}
  

  searchRooms() {
    const requestBody = {
      checkInDate: new Date().toISOString(),
      checkOutDate: new Date().toISOString(),
      roomTypeSearchRequests: [
        {
          adults: 1,
          children: 0
        }
      ]
    };

    this.apiService.searchRooms(requestBody).subscribe(
      (response) => {
        console.log('API Response:', response);
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }
}
