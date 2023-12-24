import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { createMock, DeepMocked } from '@golevelup/ts-jest';

describe('TodosController', () => {
  let controller: TodosController;
  let service: DeepMocked<TodosService>;
  let mydate: Date;

  beforeEach(async () => {
    const mockDate = new Date();
    jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate as unknown as Date);
    mydate = new Date();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
    })
      .useMocker(createMock)
      .compile();

    controller = module.get<TodosController>(TodosController);
    service = module.get(TodosService);
  });

  it('find all todos', async () => {
    service.findAll.mockResolvedValueOnce({
      nextCursor: 12,
      data: [
        {
          id: 6,
          title: 'promener le loup',
          status: 'NOT_STARTED',
          priority: 1,
          tags: ['animaux', 'loup'],
          createdAt: mydate,
          updatedAt: mydate,
          initiatorId: 2,
        },
        {
          id: 7,
          title: 'promener la tortue',
          status: 'NOT_STARTED',
          priority: 1,
          tags: ['tortue', 'animaux'],
          createdAt: mydate,
          updatedAt: mydate,
          initiatorId: 2,
        },
        {
          id: 8,
          title: 'promener le chien',
          status: 'NOT_STARTED',
          priority: 1,
          tags: ['chien'],
          createdAt: mydate,
          updatedAt: mydate,
          initiatorId: 2,
        },
      ],
    });

    const allTodos = controller.findMany({
      cursor: 6,
      limit: 3,
      initiatorId: 2,
    });

    await expect(allTodos).resolves.toStrictEqual({
      nextCursor: 12,
      data: [
        {
          id: 6,
          title: 'promener le loup',
          status: 'NOT_STARTED',
          priority: 1,
          tags: ['animaux', 'loup'],
          createdAt: mydate,
          updatedAt: mydate,
          initiatorId: 2,
        },
        {
          id: 7,
          title: 'promener la tortue',
          status: 'NOT_STARTED',
          priority: 1,
          tags: ['tortue', 'animaux'],
          createdAt: mydate,
          updatedAt: mydate,
          initiatorId: 2,
        },
        {
          id: 8,
          title: 'promener le chien',
          status: 'NOT_STARTED',
          priority: 1,
          tags: ['chien'],
          createdAt: mydate,
          updatedAt: mydate,
          initiatorId: 2,
        },
      ],
    });
  });
});
