import { Test, TestingModule } from '@nestjs/testing';
import { AutotextController } from './autotext.controller';

describe('Autotext Controller', () => {
  let controller: AutotextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutotextController],
    }).compile();

    controller = module.get<AutotextController>(AutotextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
