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
    jest.spyOn(global, "Date").mockImplementation(() => (mockDate as unknown) as Date);
    mydate = new Date();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
    }).useMocker(createMock)
    .compile();

    controller = module.get<TodosController>(TodosController);
    service = module.get(TodosService);
  });

  it('find all todos', async () => {
      service.findAll.mockResolvedValueOnce([{
        id: 2,
        title: "promener le chat",
        status: "NOT_STARTED",
        priority: 1,
        tags: ['animaux', 'chat'],
        createdAt: mydate,
        updatedAt: mydate,
      }]);

      const allTodos = controller.findMany({
        cursor: 6,
        limit: 3
      });

      await expect(allTodos).resolves.toStrictEqual([{
        id: 2,
        title: "promener le chat",
        status: "NOT_STARTED",
        priority: 1,
        tags: ['animaux', 'chat'],
        createdAt: mydate,
        updatedAt: mydate,
      }]);
  });
});
