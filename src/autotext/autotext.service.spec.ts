import { Test, TestingModule } from '@nestjs/testing';
import { AutotextService } from './autotext.service';

describe('AutotextService', () => {
  let service: AutotextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutotextService],
    }).compile();

    service = module.get<AutotextService>(AutotextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
