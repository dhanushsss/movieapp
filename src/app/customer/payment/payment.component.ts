import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { User } from 'src/app/models/user';
import { MovieService } from 'src/app/services/movie.service';
import { PayService } from 'src/app/services/pay.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  customer: User;
  movie: Movie;
  movieid: number;
  customerid: number;
  form = new FormGroup({
    customerName: new FormControl('', Validators.required),
    cardNumber: new FormControl('', Validators.required),
    expireDate: new FormControl('', Validators.required),
    cvv: new FormControl('', Validators.required),
  });

  constructor(private route: Router, private payService: PayService , private movieService: MovieService , private registrationService: RegistrationService , private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.getUserById(this.actRoute.snapshot.params['customerid']);
    this.movieid = Number(this.actRoute.snapshot.params['movieid']);
    this.movie.movieid = this.movieid;
    this.customerid = Number(this.actRoute.snapshot.params['customerid']);
    this.customer.customerid = this.customerid;
  }

  onSubmit() {
    var paymentJson = JSON.stringify(this.form.value);
    this.payService.paymentCheck(paymentJson).subscribe((data) => {
      if (data == true) {
        alert('Credential Match..');
        var jsonData = JSON.parse(paymentJson);
        this.storePayment(jsonData['paying']);
        this.route.navigateByUrl(`/customer-feedback/${this.customer.customerid}`);
      } else {
        alert('Payment Failed !!!');
      }
    });
  }

  storePayment(paying) {
    sessionStorage.setItem('payment', paying);
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
