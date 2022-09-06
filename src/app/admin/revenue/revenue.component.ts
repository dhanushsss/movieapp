import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../../models/booking';
import { Movie } from '../../models/movie';
import { Theatre } from '../../models/theatre';
import { BookingService } from '../../services/booking.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css'],
})
export class RevenueComponent implements OnInit {
  theatre: Theatre;
  booking: Booking[];
  total: any;
  totalMovie: any;
  movie: Movie[];
  constructor(
    private bookingservice: BookingService,
    public actRoute: ActivatedRoute,
    public movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getById(this.actRoute.snapshot.params['theatreid']);
  }

  getById(theatreid: any) {
    this.bookingservice.getBookingsByBookingidtotal(theatreid).subscribe({
      next: (data) => {
        console.log(data), (this.total = data);
      },
    });
  }
}
