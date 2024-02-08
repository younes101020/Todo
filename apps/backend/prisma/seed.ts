import { PrismaClient, Status } from '@prisma/client';
import { faker } from '@faker-js/faker';

// initialize the Prisma Client
const prisma = new PrismaClient();

async function seedRecord() {
  const todos = Array(8)
    .fill(0)
    .map(() => {
      const todoTitle = faker.lorem.word({
        length: { min: 5, max: 10 },
        strategy: 'shortest',
      });
      return {
        where: {
          title: todoTitle,
        },
        create: {
          title: todoTitle,
          status: ['NOT_STARTED', 'IN_PROGRESS'][
            Math.floor(Math.random() * 2)
          ] as Status,
          priority: 1,
          tags: Array(3)
            .fill(0)
            .map(() => faker.lorem.word()),
        },
      };
    });

  const projectsTitles = Array(5)
    .fill(0)
    .map(() => {
      const projectTitle = faker.lorem.word({
        length: { min: 5, max: 8 },
        strategy: 'closest',
      });
      return projectTitle;
    });

  const collection = await prisma.$transaction(
    projectsTitles.map((title) =>
      prisma.project.upsert({
        where: { title },
        update: {},
        create: {
          title,
          todos: {
            connectOrCreate: todos,
          },
        },
      }),
    ),
  );

  return collection;
}

async function main() {
  seedRecord();
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close the Prisma Client at the end
    await prisma.$disconnect();
  });
