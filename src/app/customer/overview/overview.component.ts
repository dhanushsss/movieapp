import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  book:Booking;
  customerid:any;
  constructor(private actRoute: ActivatedRoute, private bookingService :BookingService , private router: Router) { }

  ngOnInit(): void {
    this.getBookingById(this.actRoute.snapshot.params['bookingid']);
  }

  route(){
    return this.router.navigateByUrl(`customer-feedback/${this.book.customer.customerid}`)
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
