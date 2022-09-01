import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { Theatre } from 'src/app/models/theatre';
import { MovieService } from 'src/app/services/movie.service';
import { TheatreService } from 'src/app/services/theatre.service';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css'],
})
export class AddMoviesComponent implements OnInit {
  movie: Movie = new Movie();
  theatre: Theatre = new Theatre();
  theatreid: number;
  messgae: any;
  constructor(
    private movieService: MovieService,
    private service: TheatreService,
    private router: Router,
    public actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.theatreid = Number(this.actRoute.snapshot.params['theatreid']);
    this.theatre.theatreid = this.theatreid;
  }

  addMovie() {
    console.log(this.movie);
    console.log(this.theatre);
    console.log(this.theatreid);
    this.movie.theatre = this.theatre;
    this.movieService
      .addMovie(this.movie)
      .subscribe((data) => (console.log(data), (this.messgae = data)));
    this.router.navigateByUrl(`/admin-dashboard/movie/${this.theatreid}`);
  }
}
