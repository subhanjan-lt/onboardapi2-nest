import { Module } from '@nestjs/common';
import { UserMoviesService } from './user-movies.service';
import { UserMoviesController } from './user-movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserMovies, UserMoviesSchema } from './models/user-movies.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserMovies.name, schema: UserMoviesSchema }])],
  providers: [UserMoviesService],
  controllers: [UserMoviesController]
})
export class UserMoviesModule {}
