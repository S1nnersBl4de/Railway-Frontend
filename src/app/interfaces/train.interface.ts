export interface TrainRequest {
  name: string;
  source: string;
  destination: string;
  departureTime: string; // string format
  arrivalTime: string;
  totalSeats: number;
}

export interface Train {
  id: number;
  name: string;
  source: string;
  destination: string;
  departureTime: string;  
  arrivalTime: string;
  totalSeats: number;
  availableSeats: number;
}