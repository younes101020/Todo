import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        id: number;
        title: string;
        progress: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateProjectDto: UpdateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        id: number;
        title: string;
        progress: number;
        createdAt: Date;
        updatedAt: Date;
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
