import { PrismaClient, Status } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { generateSeeding } from '../src/helper';

// initialize the Prisma Client
const prisma = new PrismaClient();

async function seedRecord() {
  const projectTitle = faker.lorem.word({
    length: { min: 5, max: 8 },
    strategy: 'closest',
  });
  const todos = Array(14)
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
  generateSeeding(seedRecord, 14);
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
