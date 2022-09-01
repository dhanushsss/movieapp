import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Theatre } from 'src/app/models/theatre';
import { TheatreService } from 'src/app/services/theatre.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  theatre: Theatre = new Theatre();
  msg: any;
  theatreid: number;
  constructor(
    private service: TheatreService,
    private router: Router,
    public actRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    
  }

  goAdminDash(theatreid: number) {
    this.router.navigateByUrl(`/admin-dashboard/${theatreid}`);
  }
  loginUser() {
    console.log(this.loginUser);
    this.service.loginUserFromRemote(this.theatre).subscribe({
      next: (data) => {
        console.log(data);
        console.log(this.theatre.theatreid);
        console.log(this.theatreid);
        this.goAdminDash(data);
      },
      error: (err) => {
        alert('error');
      },
    });
  }
}
