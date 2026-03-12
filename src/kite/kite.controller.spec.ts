import { Test, TestingModule } from '@nestjs/testing';
import { KiteController } from './kite.controller';
import { KiteService } from './kite.service';

describe('KiteController', () => {
  let controller: KiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KiteController],
      providers: [KiteService],
    }).compile();

    controller = module.get<KiteController>(KiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
