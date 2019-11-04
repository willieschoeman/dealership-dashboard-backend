import { Test, TestingModule } from '@nestjs/testing';
import { DealerManagementController } from './dealer-management.controller';

describe('DealerManagement Controller', () => {
  let controller: DealerManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DealerManagementController],
    }).compile();

    controller = module.get<DealerManagementController>(DealerManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
