import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { UserMoviesDto } from './dto/user-movies.dto';
import { UserMovies, UserMoviesDocument } from './models/user-movies.model';

@Injectable()
export class UserMoviesService {
    constructor (@InjectModel(UserMovies.name) private readonly model: Model<UserMoviesDocument>) {}

    async findAll(): Promise<UserMovies[]> {
        return await this.model.find().exec();
    }

    async findOne(user_id: ObjectId): Promise<UserMovies> {
        return await this.model.findOne({user_id: user_id}).exec();
    }

    async create(userMoviesDto: UserMoviesDto): Promise<UserMovies> {
        return await new this.model({
            ...userMoviesDto,
        }).save();
    }

    async update(user_id: ObjectId, userDto: UserMoviesDto): Promise<UserMovies> {
        return await this.model.findOneAndUpdate({user_id: user_id}, userDto).exec();
    }

    async delete(user_id: ObjectId): Promise<UserMovies> {
        return await this.model.findOneAndDelete({user_id: user_id}).exec();
    }
}
