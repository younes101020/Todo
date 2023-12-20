import { PrismaClient, Status } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { generateSeeding } from '../src/helper'

// initialize the Prisma Client
const prisma = new PrismaClient();

async function seedRecord() {
  const projectTitle = faker.lorem.word({ length: { min: 5, max: 8 }, strategy: 'closest' });
  const todoTitle1 = faker.lorem.word({ length: { min: 5, max: 10 }, strategy: 'shortest' });
  const todoTitle2 = faker.lorem.word({ length: { min: 5, max: 10 }, strategy: 'shortest' });

  const post = await prisma.project.upsert({
    where: { title: projectTitle },
    update: {},
    create: {
      title: projectTitle,
      todos: {
        connectOrCreate: [
          {
            where: {
              title: todoTitle1,
            },
            create: {
              title: todoTitle1,
              status: ['NOT_STARTED', 'IN_PROGRESS'][Math.floor(Math.random()*2)] as Status,
              priority: 1,
              tags: ['', '', ''].map(_ => faker.lorem.word()),
            },
          },
          {
            where: {
              title: todoTitle2,
            },
            create: {
              title: todoTitle2,
              status: ['NOT_STARTED', 'IN_PROGRESS'][Math.floor(Math.random()*2)] as Status,
              priority: 3,
              tags: ['', '', ''].map(_ => faker.lorem.word()),
            },
          },
        ],
      },
    },
  });

  return post;
}

async function main() {
  generateSeeding(seedRecord, 10)
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
