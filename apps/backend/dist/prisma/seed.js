"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const faker_1 = require("@faker-js/faker");
const helper_1 = require("../src/helper");
const prisma = new client_1.PrismaClient();
async function seedRecord() {
    const projectTitle = faker_1.faker.lorem.word({
        length: { min: 5, max: 8 },
        strategy: 'closest',
    });
    const todos = Array(8)
        .fill(0)
        .map(() => {
        const todoTitle = faker_1.faker.lorem.word({
            length: { min: 5, max: 10 },
            strategy: 'shortest',
        });
        return {
            where: {
                title: todoTitle,
            },
            create: {
                title: todoTitle,
                status: ['NOT_STARTED', 'IN_PROGRESS'][Math.floor(Math.random() * 2)],
                priority: 1,
                tags: Array(3)
                    .fill(0)
                    .map(() => faker_1.faker.lorem.word()),
            },
        };
    });
    const post = await prisma.project.upsert({
        where: { title: projectTitle },
        update: {},
        create: {
            title: projectTitle,
            todos: {
                connectOrCreate: todos,
            },
        },
    });
    return post;
}
async function main() {
    (0, helper_1.generateSeeding)(seedRecord, 8);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map