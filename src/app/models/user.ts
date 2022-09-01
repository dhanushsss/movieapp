import { Booking } from './booking';

export class User {
  customerid?: number;
  email?: string;
  userName?: string;
  mobileNumber?: string;
  password?: string;
  booking: Booking;
  constructor() {}
}
