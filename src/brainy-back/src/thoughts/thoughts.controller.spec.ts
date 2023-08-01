import { Test, TestingModule } from '@nestjs/testing';
import { ThoughtsController } from './thoughts.controller';
import { ThoughtsService } from './thoughts.service';

describe('ThoughtsController', () => {
  let controller: ThoughtsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThoughtsController],
      providers: [ThoughtsService],
    }).compile();

    controller = module.get<ThoughtsController>(ThoughtsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
