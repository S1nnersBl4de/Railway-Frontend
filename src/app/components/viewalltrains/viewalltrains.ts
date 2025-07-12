import { Component, OnInit } from '@angular/core';
import { Trainservice } from '../../services/trainservice';
import { Train } from '../../interfaces/train.interface';

@Component({
  selector: 'app-viewalltrains',
  standalone: false,
  templateUrl: './viewalltrains.html',
  styleUrl: './viewalltrains.css'
})
export class Viewalltrains implements OnInit {
  
   trains: Train[] = [];

  constructor(private trainService: Trainservice) {}

  ngOnInit(): void {
    this.trainService.getAllTrains().subscribe({
      next: (data) => {
        this.trains = data;
      },
      error: (err) => {
        console.error('Failed to fetch trains:', err);
      }
    });
  }

}
