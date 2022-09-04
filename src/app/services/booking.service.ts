import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { Movie } from '../models/movie';
import { User } from '../models/user';

const baseUrl = 'http://localhost:8080/SumBooking';
const bookUrl = 'http://localhost:8080/addBooking';
const getURL = 'http://localhost:8080/BookingId';
const getCustomer='http://localhost:8080/getByCustomerId'

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

   findBookingId(bookingid:number):Observable<Booking>{
    return this._http.get<Booking>(`${getURL}/${bookingid}`);
  }

  getCustomer(customerid:number):Observable<Booking[]>{
    return this._http.get<Booking[]>(`${getCustomer}/${customerid}`);
  }

}
