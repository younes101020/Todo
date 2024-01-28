import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto, UpdateTodoDto } from './dto';
import { LazyLoadingInputDto } from '../common/dto';
export declare class TodosService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findAll({ initiatorId: projectId, cursor, limit, }: LazyLoadingInputDto): Promise<{
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: number;
        title: string;
        status: import(".prisma/client").$Enums.Status;
        priority: number;
        tags: string[];
        createdAt: Date;
        updatedAt: Date;
        initiatorId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateTodoDto: UpdateTodoDto): Promise<{
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
    remove(id: number): import(".prisma/client").Prisma.Prisma__TodoClient<{
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
