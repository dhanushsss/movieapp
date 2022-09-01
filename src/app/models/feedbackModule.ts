import { User } from "./user";

export class FeedbackModule {
  id?: number;
  comments?: string;
  rating?: string;
  customer :User;
  constructor(){}
}
