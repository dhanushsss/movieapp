import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: User = new User();
  msg: any;
  customerid: number;

  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  goCustomer(customerid: number) {
    this._router.navigateByUrl(`/main-page/${customerid}`);
  }
  loginUser() {
    console.log(this.loginUser);
    this._service.loginUserFromRemote(this.login).subscribe({
      next: (data) => {
        console.log('response'), this.goCustomer(data);
      },
      error: (err) => {
        alert('error');
      },
    });
  }
}
