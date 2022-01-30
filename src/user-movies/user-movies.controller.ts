import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { UserMoviesDto } from './dto/user-movies.dto';
import { UserMoviesService } from './user-movies.service';

@Controller('user-movies')
export class UserMoviesController {
    constructor(private readonly service: UserMoviesService) {}

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(':user_id')
    async find(@Param('user_id') user_id: ObjectId) {
        return await this.service.findOne(user_id);
    }

    @Post()
    async create(@Body() userDto: UserMoviesDto) {
        return await this.service.create(userDto);
    }

    @Put(':user_id')
    async update(@Param('user_id') user_id: ObjectId, @Body() userMoviesDto: UserMoviesDto) {
        return await this.service.update(user_id, userMoviesDto);
    }

    @Delete(':user_id')
    async delete(@Param('user_id') user_id: ObjectId) {
        return await this.service.delete(user_id);
    }
}
