import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserMoviesModule } from './user-movies/user-movies.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserMoviesModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
