import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { Movie } from '../models/movie';

const baseUrl = 'http://localhost:8080/SumBooking';
const bookUrl = 'http://localhost:8080/addBooking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private _http: HttpClient) {}
  public getBookingsByBookingidtotal(theatreid: number): Observable<Movie> {
    return this._http.get<Movie>(`${baseUrl}/${theatreid}`);
  }

  public saveTotalCost(book: Booking): Observable<Booking> {
    return this._http.post<Booking>(`${bookUrl}`, book);
  }
}
