import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';
import { PrismaService } from '../prisma/prisma.service'
import { createMock, DeepMocked } from '@golevelup/ts-jest';


describe('TodosService', () => {
  let service: TodosService;
  let prismaclient: DeepMocked<PrismaService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService],
    })
    .useMocker(createMock)
    .compile();

    service = module.get<TodosService>(TodosService);
    prismaclient = module.get(PrismaService)
  });

  it('return ok when cursor is less than 5', async () => {
    const mockedData = [{
      id: 1,
      title: "nourrir chat",
      status: "NOT_STARTED",
      priority: 1,
      tags: ['chat', 'nourriture']
    }]

    prismaclient.todo.findMany = jest.fn().mockReturnValueOnce(mockedData)


    expect(service.findAll({cursor: 1, limit: 2})).toBe('ok');
  });
});
