import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  Bookings:Booking[];

  constructor(private bookingservice:BookingService , private actRoute : ActivatedRoute ) { }

  ngOnInit(): void {
    this.getCustomerId(this.actRoute.snapshot.params['customerid']);
  }

  getCustomerId(customerid: any) {
    this.bookingservice.getCustomer(customerid).subscribe(
      (data)=>{
        console.log(data);
        this.Bookings=data;
      }
    )
  }


}
