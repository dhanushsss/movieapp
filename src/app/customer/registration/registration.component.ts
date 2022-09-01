import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  user: User = new User();
  message: any;

  constructor(private service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}
  registration() {
    this.service.saveUser(this.user).subscribe({
      next: (data) => {
        (this.message = data), this._router.navigate(['']);
      },
    });
  }
}
