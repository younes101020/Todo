import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto, UpdateTodoDto } from './dto';
import { LazyLoadingInputDto } from '../common/dto';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  create(createTodoDto: CreateTodoDto) {
    return this.prisma.todo.create({ data: createTodoDto });
  }

  findAll({ initiatorId: projectId, cursor, limit }: LazyLoadingInputDto) {
    return this.prisma.todo.findMany({
      where: {
        initiatorId: projectId,
      },
      take: limit,
      skip: cursor ? 1 : undefined,
      cursor: cursor ? { id: cursor }: undefined,
      orderBy: {
        id: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.prisma.todo.update({
      where: { id },
      data: updateTodoDto
    });
  }

  remove(id: number) {
    return this.prisma.todo.delete({ where: { id } });
  }
}
