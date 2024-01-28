"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TodosService = class TodosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createTodoDto) {
        return this.prisma.todo.create({ data: createTodoDto });
    }
    async findAll({ initiatorId: projectId, cursor, limit, }) {
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
    findOne(id) {
        return this.prisma.todo.findUnique({ where: { id } });
    }
    update(id, updateTodoDto) {
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
    remove(id) {
        return this.prisma.todo.delete({ where: { id } });
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TodosService);
//# sourceMappingURL=todos.service.js.map