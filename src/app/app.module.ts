import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddMoviesComponent } from './admin/admin-dashboard/add-movies/add-movies.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { MovieComponent } from './admin/admin-dashboard/movie/movie.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { RevenueComponent } from './admin/revenue/revenue.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './customer/login/login.component';
import { RegistrationComponent } from './customer/registration/registration.component';
import { MainPageComponent } from './customer/main-page/main-page.component';
import { BookSlotComponent } from './customer/book-slot/book-slot.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { PaymentComponent } from './customer/payment/payment.component';
import { FeedbackComponent } from './customer/feedback/feedback.component';
import { ThankyouComponent } from './customer/thankyou/thankyou.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AddMoviesComponent,
    MovieComponent,
    RevenueComponent,
    LoginComponent,
    RegistrationComponent,
    MainPageComponent,
    BookSlotComponent,
    NavBarComponent,
    AdminSignupComponent,
    PaymentComponent,
    FeedbackComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
