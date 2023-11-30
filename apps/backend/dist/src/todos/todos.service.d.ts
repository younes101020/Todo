import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTodoDto: CreateTodoDto): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: number;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: number;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateTodoDto: UpdateTodoDto): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: number;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: number;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
