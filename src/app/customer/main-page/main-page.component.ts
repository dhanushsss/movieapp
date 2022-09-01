import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  customer: User;
  movie: any;
  constructor(
    private http: HttpClient,
    public actRoute: ActivatedRoute,
    private registrationService: RegistrationService
  ) {}
  ngOnInit(): void {
    let Response = this.http
      .get('http://localhost:8080/Movies')
      .subscribe((data) => (this.movie = data));
    this.getByUserId(this.actRoute.snapshot.params['customerid']);
  }
  getByUserId(customerid: any) {
    this.registrationService.getUserByid(customerid).subscribe((data) => {
      console.log(customerid),
        (this.customer = data),
        console.log(this.customer);
    });
  }
}
