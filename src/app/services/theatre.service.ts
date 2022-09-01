import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theatre } from '../models/theatre';

const baseUrl = 'http://localhost:8080/TheatreBy';

@Injectable({
  providedIn: 'root',
})
export class TheatreService {
  constructor(private _http: HttpClient) {}
  public loginUserFromRemote(theatre: Theatre): Observable<any> {
    return this._http.post<Theatre>(
      'http://localhost:8080/TheatreLogin',
      theatre
    );
  }
  findMoviesById(theatreid: number): Observable<Theatre> {
    return this._http.get<Theatre>(`${baseUrl}/${theatreid}`);
  }
}
