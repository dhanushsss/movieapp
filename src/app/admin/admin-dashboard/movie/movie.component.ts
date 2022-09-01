import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { Theatre } from 'src/app/models/theatre';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: Movie[];
  theatre: Theatre;

  constructor(
    private movieService: MovieService,
    private router: Router,
    public actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getById(this.actRoute.snapshot.params['theatreid']);
  }

  getById(theatreid: any) {
    this.movieService.getMovieById(theatreid).subscribe({
      next: (data) => {
        console.log(data), (this.movie = data);
      },
    });
  }
}
