import { Movie } from '../models/movie';
import { User } from './user';

export class Booking {
  bookingid: number;
  showtime: string;
  totalNoTicket: number;
  totalCost: number;
  movies: Movie;
  customer :User
}
