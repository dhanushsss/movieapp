import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviesComponent } from './admin/admin-dashboard/add-movies/add-movies.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { MovieComponent } from './admin/admin-dashboard/movie/movie.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { RevenueComponent } from './admin/revenue/revenue.component';
import { BookSlotComponent } from './customer/book-slot/book-slot.component';
import { FeedbackComponent } from './customer/feedback/feedback.component';
import { LoginComponent } from './customer/login/login.component';
import { MainPageComponent } from './customer/main-page/main-page.component';
import { OverviewComponent } from './customer/overview/overview.component';
import { PaymentComponent } from './customer/payment/payment.component';
import { RegistrationComponent } from './customer/registration/registration.component';
import { ThankyouComponent } from './customer/thankyou/thankyou.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: RegistrationComponent },
  { path: 'main-page/:customerid', component: MainPageComponent },
  { path: 'book-slot/:customerid/:movieid', component: BookSlotComponent },
  { path: 'customer-payment/:customerid/:movieid/:bookingid', component: PaymentComponent },
  { path: 'overview/:customerid/:bookingid', component: OverviewComponent },
  { path: 'customer-feedback/:customerid', component: FeedbackComponent },
  { path: 'ThankYou', component: ThankyouComponent },


  

  // Admin

  { path: 'theatre', component: AdminLoginComponent },
  { path: 'theatre-signup', component: AdminSignupComponent },

  {
    path: 'admin-dashboard/:theatreid',
    component: AdminDashboardComponent,
  },
  { path: 'admin-dashboard/movie/:theatreid', component: MovieComponent },
  {
    path: 'admin-dashboard/add-movies/:theatreid',
    component: AddMoviesComponent,
  },
  {
    path: 'revenue/:theatreid',
    component: RevenueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
