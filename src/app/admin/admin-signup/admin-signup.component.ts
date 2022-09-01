import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theatre } from 'src/app/models/theatre';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css'],
})
export class AdminSignupComponent implements OnInit {
  theatre: Theatre = new Theatre();
  message: any;

  constructor(private service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}
  registration() {
    this.service.saveTheatre(this.theatre).subscribe({
      next: (data) => {
        (this.message = data), this._router.navigate(['/theatre']);
      },
    });
  }
}
