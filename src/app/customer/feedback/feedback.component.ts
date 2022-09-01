import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackModule } from 'src/app/models/feedbackModule';
import { Movie } from 'src/app/models/movie';
import { User } from 'src/app/models/user';
import { FeedbackService } from 'src/app/services/feedback.service';
import { MovieService } from 'src/app/services/movie.service';
import { RegistrationService } from 'src/app/services/registration.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  
  customer: User;
  movie: Movie;
  movieid: number;
  customerid: number;
  feed: FeedbackModule = new FeedbackModule();
  messgae: any;
  constructor(private service: FeedbackService , private route: Router , private movieService: MovieService , private registrationService: RegistrationService , private actRoute: ActivatedRoute) {}
  public add() {
    this.feed.customer = this.customer;
    console.log(this.customer.customerid);
    this.service.saveData(this.feed).subscribe((data) => (this.messgae = data));
  }
  ngOnInit(): void {
   
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





}
