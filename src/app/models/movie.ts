import { Theatre } from './theatre';

export class Movie {
  movieid?: number;
  title?: string;
  cast?: string;
  date?: string;
  totalTicket?: string;
  language?: string;
  price?: number;
  showTime?: string;
  image?: string;
  theatre: Theatre;
}
