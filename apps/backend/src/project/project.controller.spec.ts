import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller';
//import { ProjectService } from './project.service';
import {
  //DeepMocked,
  createMock,
} from '@golevelup/ts-jest';

describe('ProjectController', () => {
  let controller: ProjectController;
  //let service: DeepMocked<ProjectService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectController],
    })
      .useMocker(createMock)
      .compile();

    controller = module.get<ProjectController>(ProjectController);
    //service = module.get(ProjectService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    //console.log(service);
  });
});
