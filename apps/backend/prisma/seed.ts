import { PrismaClient } from '@prisma/client';

// initialize the Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy todos
  const post1 = await prisma.todo.upsert({
    where: { title: 'Remplir le carnet de santé' },
    update: {},
    create: {
      title: 'Remplir le carnet de santé',
      completed: false,
    },
  });

  const post2 = await prisma.todo.upsert({
    where: { title: "Prendre rendez-vous chez le dentiste" },
    update: {},
    create: {
      title: "Prendre rendez-vous chez le dentiste",
      completed: true,
    },
  });

  console.log({ post1, post2 });
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