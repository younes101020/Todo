import { TodosService } from './todos.service';
import { CreateTodoDto, UpdateTodoDto } from './dto';
import { LazyLoadingInputDto } from '../common/dto';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    create(createTodoDto: CreateTodoDto): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: number;
        title: string;
        status: import(".prisma/client").$Enums.Status;
        priority: number;
        tags: string[];
        createdAt: Date;
        updatedAt: Date;
        initiatorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findMany(lazyLoadingInputDto: LazyLoadingInputDto): Promise<{
        nextCursor: number;
        data: {
            id: number;
            title: string;
            status: import(".prisma/client").$Enums.Status;
            priority: number;
            tags: string[];
            createdAt: Date;
            updatedAt: Date;
            initiatorId: number;
        }[];
    }>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: number;
        title: string;
        status: import(".prisma/client").$Enums.Status;
        priority: number;
        tags: string[];
        createdAt: Date;
        updatedAt: Date;
        initiatorId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<{
        id: number;
        title: string;
        progress: number;
        createdAt: Date;
        updatedAt: Date;
    }> | import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: number;
        title: string;
        status: import(".prisma/client").$Enums.Status;
        priority: number;
        tags: string[];
        createdAt: Date;
        updatedAt: Date;
        initiatorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: number;
        title: string;
        status: import(".prisma/client").$Enums.Status;
        priority: number;
        tags: string[];
        createdAt: Date;
        updatedAt: Date;
        initiatorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
