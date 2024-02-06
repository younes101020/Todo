import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class ProjectService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProjectDto: CreateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        id: number;
        title: string;
        progress: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({} & {
        id: number;
        title: string;
        progress: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        id: number;
        title: string;
        progress: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateProjectDto: UpdateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        id: number;
        title: string;
        progress: number;
        createdAt: Date;
        updatedAt: Date;
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
