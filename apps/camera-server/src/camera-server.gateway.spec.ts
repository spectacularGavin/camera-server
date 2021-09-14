import { Test, TestingModule } from '@nestjs/testing';
import { CameraServerGateway } from './camera-server.gateway';

describe('CameraServerGateway', () => {
  let gateway: CameraServerGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CameraServerGateway],
    }).compile();

    gateway = module.get<CameraServerGateway>(CameraServerGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
