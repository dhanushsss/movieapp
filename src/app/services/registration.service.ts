import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theatre } from '../models/theatre';
import { User } from '../models/user';
const GetUrl = 'http://localhost:8080/getUserByid';
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private _http: HttpClient) {}

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<User>('http://localhost:8080/login', user);
  }

  public saveUser(user: User): Observable<any> {
    return this._http.post<User>('http://localhost:8080/registered', user, {
      responseType: 'text' as 'json',
    });
  }

  public saveTheatre(theatre: Theatre): Observable<any> {
    return this._http.post<User>('http://localhost:8080/theatre', theatre, {
      responseType: 'text' as 'json',
    });
  }

  public getUserByid(customerid: any): Observable<User> {
    return this._http.get<User>(`${GetUrl}/${customerid}`);
  }
}
