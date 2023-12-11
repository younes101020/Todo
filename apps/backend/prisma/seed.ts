import { PrismaClient } from '@prisma/client';

// initialize the Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create three dummy todos
  const post1 = await prisma.todo.upsert({
    where: { title: "Remplir le carnet de santé" },
    update: {},
    create: {
      title: "Remplir le carnet de santé",
      status: "NOT_STARTED",
      priority: 1,
      tags: ["santé", "hopital", "rdv"],
    },
  });

  const post2 = await prisma.todo.upsert({
    where: { title: "Prendre rendez-vous chez le dentiste" },
    update: {},
    create: {
      title: "Prendre rendez-vous chez le dentiste",
      status: "NOT_STARTED",
      priority: 2,
    },
  });

  const post3 = await prisma.todo.upsert({
    where: { title: "S'inscrire à la boxe" },
    update: {},
    create: {
      title: "S'inscrire à la boxe",
      status: "IN_PROGRESS",
      priority: 3,
      tags: ["sport", "hygiene"],
    },
  });

  console.log({ post1, post2, post3 });
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