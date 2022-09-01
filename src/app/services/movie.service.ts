import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

const baseUrl = 'http://localhost:8080/theatre/getbyid';
const movieUrl = 'http://localhost:8080/MovieById';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieId: number;
  // theatreid: number;

  constructor(private httpClient: HttpClient) {}

  getAllMovie(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('http://localhost:8080/Movies');
  }

  addMovie(movie: Movie): Observable<any> {
    return this.httpClient.post<Movie>(
      'http://localhost:8080/addMovie',
      movie,
      {
        responseType: 'text' as 'json',
      }
    );
  }

  getId(getId?: number) {
    this.movieId = getId;
  }

  getMovieById(theatreid: any): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${baseUrl}/${theatreid}`);
  }

  getByMovieById(movieId: any): Observable<Movie> {
    return this.httpClient.get<Movie>(`${movieUrl}/${movieId}`);
  }
}
