import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from './project.service';
import { PrismaService } from '../prisma/prisma.service';
import { createMock, DeepMocked } from '@golevelup/ts-jest';

describe('ProjectService', () => {
  let service: ProjectService;
  let prismaclient: DeepMocked<PrismaService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectService],
    })
      .useMocker(createMock)
      .compile();

    service = module.get<ProjectService>(ProjectService);
    prismaclient = module.get(PrismaService);
  });

  it('should be defined', () => {
    prismaclient.todo.count = jest.fn().mockReturnValueOnce(0);
    expect(service).toBeDefined();
  });
});
