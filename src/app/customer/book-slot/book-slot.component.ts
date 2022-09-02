import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { Movie } from 'src/app/models/movie';
import { User } from 'src/app/models/user';
import { BookingService } from 'src/app/services/booking.service';
import { MovieService } from 'src/app/services/movie.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.css'],
})
export class BookSlotComponent implements OnInit {
  movie: Movie;
  book: Booking = new Booking();
  customer: User;
  movieid: number;
  customerid: number;
  totalNoTicket:number;
  totalCost:number ; 
  constructor(
    private movieService: MovieService,
    private actRoute: ActivatedRoute,
    private bookingService: BookingService,
    private registrationService: RegistrationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMovieById(this.actRoute.snapshot.params['movieid']);
    this.getUserById(this.actRoute.snapshot.params['customerid']);
    this.movieid = Number(this.actRoute.snapshot.params['movieid']);
    this.movie.movieid = this.movieid;
    this.customerid = Number(this.actRoute.snapshot.params['customerid']);
    this.customer.customerid = this.customerid;

  
  }
  getUserById(customerid: any) {
    this.registrationService.getUserByid(customerid).subscribe({
      next: (data) => {
        this.customer = data;
        console.log(this.customer);
        console.log(this.customer.customerid);
      },
    });
  }

  getMovieById(movieid: any) {
    this.movieService.getByMovieById(movieid).subscribe({
      next: (data) => {
        this.movie = data;
      },
    });
  }

  saveTotalCost() {
    this.book.movies = this.movie;
    this.book.customer = this.customer;
    console.log(this.customer.customerid);
    console.log(this.movieid);
    this.book.totalCost=this.book.totalCost;
    this.bookingService
      .saveTotalCost(this.book)
      .subscribe((data) => (console.log(this.book.bookingid) , this.book = data ,    this.router.navigateByUrl(`customer-payment/${this.customer.customerid}/${this.movieid}/${this.book.bookingid}`))); 
      
  }

  priceCalc(): number{
    if(this.book.totalNoTicket>0)
      this.book.totalCost = this.book.totalNoTicket*this.movie.price;
      return this.book.totalCost;
  }
}
