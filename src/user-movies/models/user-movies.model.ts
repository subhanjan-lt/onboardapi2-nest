import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type UserMoviesDocument = UserMovies & Document; //so we can autocomplete & use all functions related to documents i.e find, findOne etc.

export enum Status {
    WATCHED = 'WATCHED',
    SKIPPED = 'SKIPPED',
    CANCELLED = 'CANCELLED'
}
const mongoose = require('mongoose');

@Schema()
export class UserMovies {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  user_id: ObjectId;
  @Prop( {type: Date} )
  booked_at?: Date;
  @Prop( {type: mongoose.Schema.Types.enum} )
  status?: Status;
  @Prop()
  city?: string;
  @Prop()
  zipcode?: string;
}

export const UserMoviesSchema = SchemaFactory.createForClass(UserMovies);
