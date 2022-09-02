import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { Movie } from 'src/app/models/movie';
import { User } from 'src/app/models/user';
import { BookingService } from 'src/app/services/booking.service';
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
  bookingid:number;
  book:Booking;
  customerid: number;
  form = new FormGroup({
    customerName: new FormControl('', Validators.required),
    cardNumber: new FormControl('', Validators.required),
    expireDate: new FormControl('', Validators.required),
    cvv: new FormControl('', Validators.required),
  });

  constructor(private route: Router, private payService: PayService  , private registrationService: RegistrationService , private actRoute: ActivatedRoute , private bookingService :BookingService) {}

  ngOnInit(): void {
    
    this.getUserById(this.actRoute.snapshot.params['customerid']);  
    this.getBookingById(this.actRoute.snapshot.params['bookingid']);
    this.customerid = Number(this.actRoute.snapshot.params['customerid']);
    this.customer.customerid = this.customerid;
    this.bookingid=Number(this.actRoute.snapshot.params['bookingid']);
    this.book.bookingid= this.bookingid;
  }


  onSubmit() {
    var paymentJson = JSON.stringify(this.form.value);
    this.payService.paymentCheck(paymentJson).subscribe((data) => {
      if (data == true) {
        alert('Payment Successful .. ');
        var jsonData = JSON.parse(paymentJson);
        this.storePayment(jsonData['paying']);
        console.log(this.book.bookingid);
        this.route.navigateByUrl(`overview/${this.customer.customerid}/${this.book.bookingid}`);
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

  getBookingById(bookingid:any) {
    this.bookingService.findBookingId(bookingid).subscribe({
      next:(data)=>{
        this.book = data;
        console.log(this.book)
        console.log(this.book.bookingid);
      }
    })   
  }

}
