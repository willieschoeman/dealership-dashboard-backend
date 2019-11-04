import { Test, TestingModule } from '@nestjs/testing';
import { DealerManagementService } from './dealer-management.service';

describe('DealerManagementService', () => {
  let service: DealerManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DealerManagementService],
    }).compile();

    service = module.get<DealerManagementService>(DealerManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
