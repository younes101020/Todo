import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { PrismaService } from '../prisma/prisma.service'
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';


describe('TodosController', () => {
  let controller: TodosController;
  //let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      //providers: [TodosService, PrismaService],
    }).useMocker((token) => {
      const results = ['test1', 'test2'];
      if(token === TodosService) {
        return { findAll: jest.fn().mockResolvedValue(results) };
      }
      if(token === PrismaService) {
        return {
          prisma: {
            todo: {
              findMany: jest.fn().mockResolvedValueOnce([
                { 
                  id: 1,
                  title: 'sortir le chat',
                  status: 'IN_PROGRESS',
                  priority: 1,
                  tags: ['animaux', 'sortie'],
                  createdAt: '2023-11-12T22:49:00.000Z',
                  updatedAt: '2023-12-12T22:49:00.000Z',
                },
              ])
            }
          }
        }
      }
    })
    .compile();

    controller = module.get<TodosController>(TodosController);
    // service = module.get<TodosService>(TodosService);
  });

  it('findAll', () => {
      // jest.spyOn(service, 'findAll').mockImplementation(() => result);
      expect(controller).toBeDefined();
  });
});
