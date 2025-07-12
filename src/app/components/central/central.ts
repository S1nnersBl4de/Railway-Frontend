import { Component, OnInit } from '@angular/core';
import { Train } from '../../interfaces/train.interface';
import { Trainservice } from '../../services/trainservice';
import { ChangeDetectorRef } from '@angular/core';
import { Bookingservice } from '../../services/bookingservice';

@Component({
  selector: 'app-central',
  standalone: false,
  templateUrl: './central.html',
  styleUrl: './central.css'
})
export class Central implements OnInit {
  source: string = '';
  destination: string = '';
  filteredTrains: Train[] = [];
  errorMessage: string = '';

  constructor(
    private trainService: Trainservice,
    private cdRef: ChangeDetectorRef,
    private bookingService: Bookingservice
  ) {}

  ngOnInit(): void {}

  onSearch(): void {
    if (!this.source || !this.destination) {
      this.errorMessage = 'Please enter both source and destination.';
      return;
    }

    this.errorMessage = '';

    this.trainService.searchTrains(this.source, this.destination).subscribe({
      next: (data: Train[]) => {
        this.filteredTrains = data;
        this.cdRef.detectChanges(); //  forces the view to refresh!
      },
      error: (err) => {
        console.error('Search failed:', err);
        this.errorMessage = 'No trains found or server error.';
        this.cdRef.detectChanges(); // force update in error case too
      }
    });
  }


  bookSeat(train: Train): void {
    this.bookingService.bookSeat(train.id).subscribe({
      next: () => {
        alert(`Successfully booked a ticket on ${train.name}!`);
        
      },
      error: (err) => {
        alert('Failed to book ticket. Please try again.');
        console.error(err);
      }
    });
  }
}
