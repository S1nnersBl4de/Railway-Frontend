import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Booking } from '../interfaces/booking.interface';
import { PersonalBooking } from '../interfaces/booking.interface';

@Injectable({
  providedIn: 'root'
})
export class Bookingservice {

  private baseUrl = 'https://localhost:7040/api/Booking';

  constructor(private http: HttpClient) {}

  getAllBookings(): Observable<Booking[]> {
    let token = '';

    // Safely check if running in browser before accessing localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      token = localStorage.getItem('token') ?? '';
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Booking[]>(`${this.baseUrl}/all-bookings`, { headers });
  }

  getMyBookings(): Observable<PersonalBooking[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<PersonalBooking[]>(`${this.baseUrl}/my-bookings`, { headers });
  }

  bookSeat(trainId: number): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    
    return this.http.post(`${this.baseUrl}/book-seat`, { trainId }, { headers });
  }

}
