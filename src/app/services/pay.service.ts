import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PayService {
  apiUrl = 'http://localhost:8080/payment';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _http: HttpClient) {}

  paymentCheck(paymentDetails) {
    return this._http.post<Boolean>(
      this.apiUrl,
      paymentDetails,
      this.httpOptions
    );
  }
}
