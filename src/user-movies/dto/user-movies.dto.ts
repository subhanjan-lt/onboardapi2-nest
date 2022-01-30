import { ObjectId } from "mongoose";
import { Status } from "../models/user-movies.model";

export class UserMoviesDto {
    name: string;
    user_id: ObjectId;
    booked_at?: Date;
    status?: Status; 
    zipcode?: string;
  }