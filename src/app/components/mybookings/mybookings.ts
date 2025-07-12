import { Component, OnInit } from '@angular/core';
import { Bookingservice } from '../../services/bookingservice';
import { PersonalBooking } from '../../interfaces/booking.interface';
import { Train } from '../../interfaces/train.interface';

@Component({
  selector: 'app-mybookings',
  standalone: false,
  templateUrl: './mybookings.html',
  styleUrl: './mybookings.css'
})
export class Mybookings implements OnInit {

  myBookings: PersonalBooking[] = [];

  constructor(private bookingService: Bookingservice) {}

  ngOnInit(): void {
    this.bookingService.getMyBookings().subscribe({
      next: (response: any) => {
        this.myBookings = response.data; 
      },
      error: (err) => {
        console.error('Failed to fetch my bookings:', err);
      }
    });
  }

  downloadReport(): void {

    console.log('downloadReport clicked');

    if (this.myBookings.length === 0) 
      return;

    const csvRows: string[] = [];
    const headers = ['Train Name', 'Departure Time', 'Seat Number'];
    csvRows.push(headers.join(','));

    this.myBookings.forEach(booking => {
      const row = [
        `"${booking.trainName}"`,  // quotes for CSV safety
        `"${new Date(booking.departureTime).toLocaleString()}"`,
        booking.seatNumber.toString()
      ];
      csvRows.push(row.join(','));
    });

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-bookings-report.csv';
    a.click();

    URL.revokeObjectURL(url);
  }

  
}
