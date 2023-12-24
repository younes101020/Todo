import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';
import { PrismaService } from '../prisma/prisma.service';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { Status } from '@prisma/client';

describe('TodosService', () => {
  let service: TodosService;
  let prismaclient: DeepMocked<PrismaService>;
  let mydate: Date;

  beforeEach(async () => {
    const mockDate = new Date();
    jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate as unknown as Date);
    mydate = new Date();

    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService],
    })
      .useMocker(createMock)
      .compile();

    service = module.get<TodosService>(TodosService);
    prismaclient = module.get(PrismaService);
  });

  it('not throw error and return the correct object', async () => {
    const data = [
      {
        id: 1,
        title: 'nourrir cheval',
        status: 'NOT_STARTED' as Status,
        priority: 1,
        tags: ['cheval', 'nourriture'],
        createdAt: mydate,
        updatedAt: mydate,
        initiatorId: 2,
      },
      {
        id: 1,
        title: 'nourrir chat',
        status: 'NOT_STARTED' as Status,
        priority: 1,
        tags: ['chat', 'nourriture'],
        createdAt: mydate,
        updatedAt: mydate,
        initiatorId: 2,
      },
    ];

    const mockedData = {
      nextCursor: 0,
      data,
    };

    prismaclient.todo.findMany = jest.fn().mockReturnValueOnce(mockedData);
    (await service.findAll({ cursor: 1, limit: 2, initiatorId: 2 })).data =
      data;

    expect(service.findAll({ cursor: 1, limit: 2, initiatorId: 2 })).toBe(
      mockedData,
    );
  });
});
