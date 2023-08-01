import { Test, TestingModule } from '@nestjs/testing';
import { ThoughtsService } from './thoughts.service';

describe('ThoughtsService', () => {
  let service: ThoughtsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThoughtsService],
    }).compile();

    service = module.get<ThoughtsService>(ThoughtsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
