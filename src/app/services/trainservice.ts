import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrainRequest } from '../interfaces/train.interface';
import { Observable } from 'rxjs';
import { Train } from '../interfaces/train.interface';

@Injectable({
  providedIn: 'root'
})
export class Trainservice {
  private baseUrl = 'https://localhost:7040/api/Train'; 

  private baseUrl1 = 'https://localhost:7040/api'

  constructor(private http: HttpClient) {}

  addTrain(train: TrainRequest) {
    return this.http.post(`${this.baseUrl}`, train);
  }

  getAllTrains(): Observable<Train[]> {
    return this.http.get<Train[]>(`${this.baseUrl1}/Train/get-all`);
  }

  searchTrains(source: string, destination: string): Observable<Train[]> {
    const url = `${this.baseUrl}/search?source=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}`;
    return this.http.get<Train[]>(url);
  }
}
