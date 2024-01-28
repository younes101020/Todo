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

  async findAll({
    initiatorId: projectId,
    cursor,
    limit,
  }: LazyLoadingInputDto) {
    const data = await this.prisma.todo.findMany({
      where: {
        initiatorId: projectId,
      },
      take: limit,
      skip: cursor ? 1 : undefined,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: {
        id: 'asc',
      },
    });

    return {
      nextCursor: data.at(-1) ? data.at(-1).id : null,
      data: data,
    };
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    if (updateTodoDto.status === 'DONE') {
      return this.prisma.$transaction(async (tx) => {
        const totalTodos = await tx.todo.count({
          where: {
            initiatorId: updateTodoDto.initiatorId,
          },
        });

        if (totalTodos === 1) {
          return tx.project.delete({
            where: {
              id: updateTodoDto.initiatorId,
            },
          });
        }

        await tx.todo.delete({
          where: {
            id,
          },
        });

        const progress = (1 / totalTodos) * 100;

        const newProgress = await tx.project.update({
          where: { id: updateTodoDto.initiatorId },
          data: {
            progress,
          },
        });

        return newProgress;
      });
    }
    return this.prisma.todo.update({
      where: {
        id,
      },
      data: {
        status: updateTodoDto.status,
      },
    });
  }

  remove(id: number) {
    return this.prisma.todo.delete({ where: { id } });
  }
}
