import { Component, OnInit } from '@angular/core';
import { Bookingservice } from '../../services/bookingservice';
import { Booking } from '../../interfaces/booking.interface';

@Component({
  selector: 'app-allbookings',
  standalone: false,
  templateUrl: './allbookings.html',
  styleUrl: './allbookings.css'
})
export class Allbookings implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: Bookingservice) {}

  ngOnInit(): void {
    this.bookingService.getAllBookings().subscribe({
      next: (response: any) => {
        this.bookings = response.data;  // Fix here: assign the array inside "data"
      },
      error: (err) => {
        console.error('Failed to fetch bookings:', err);
      }
    });
  }
}
