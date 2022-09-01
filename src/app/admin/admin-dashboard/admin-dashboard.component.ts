import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theatre } from 'src/app/models/theatre';
import { TheatreService } from 'src/app/services/theatre.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  theatre: Theatre;
  constructor(
    private route: Router,
    public actRoute: ActivatedRoute,
    private service: TheatreService
  ) {}

  ngOnInit(): void {
    this.theatreId(this.actRoute.snapshot.params['theatreid']);
  }
  theatreId(theatreid: any) {
    this.service.findMoviesById(theatreid).subscribe({
      next: (data) => {
        console.log(data), (this.theatre = data);
      },
    });
  }

  logout() {
    sessionStorage.clear();
    this.route.navigate(['admin']);
  }

  checkLogin() {
    if (sessionStorage.length == 0) {
      this.route.navigate(['admin']);
    }
  }
}
