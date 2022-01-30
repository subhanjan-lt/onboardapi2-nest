import { Test, TestingModule } from '@nestjs/testing';
import { UserMoviesController } from './user-movies.controller';

describe('UserMoviesController', () => {
  let controller: UserMoviesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserMoviesController],
    }).compile();

    controller = module.get<UserMoviesController>(UserMoviesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
