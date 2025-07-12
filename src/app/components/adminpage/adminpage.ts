import { Component } from '@angular/core';
import { Trainservice } from '../../services/trainservice';
import { TrainRequest } from '../../interfaces/train.interface';

@Component({
  selector: 'app-adminpage',
  standalone: false,
  templateUrl: './adminpage.html',
  styleUrl: './adminpage.css'
})
export class Adminpage {
   train: TrainRequest = {
    name: '',
    source: '',
    destination: '',
    departureTime: '',
    arrivalTime: '',
    totalSeats: 0
  };

  successMessage = '';

  constructor(private trainService: Trainservice) {}

  submitTrain() {
    this.trainService.addTrain(this.train).subscribe({
      next: () => {
        this.successMessage = 'Train added successfully!';
        this.train = {
          name: '',
          source: '',
          destination: '',
          departureTime: '',
          arrivalTime: '',
          totalSeats: 0
        };
      },
      error: (err) => {
        console.error('Failed to add train:', err);
      }
    });
  }

}
