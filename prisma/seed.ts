import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const data = [
  {
    id: 1,
    title: "Título 1",
    author: "Jorge Amado",
    content: "O Supremo Tribunal Federal",
    date: "1999-01-10T17:00:00Z",
    category: "Civil",
  },
  {
    id: 2,
    title: "Título 2",
    author: "Jorge Amado",
    content: "Tribunal",
    date: "2001-01-10T17:00:00Z",
    category: "Criminal",
  },
  {
    id: 3,
    title: "Título 3",
    author: "Gilmar Mendes",
    content: "A Constituição Federal",
    date: "2000-01-10T17:00:00Z",
    category: "Civil",
  },
];

async function main() {
  let articles = await prisma.article.findMany();
  if (articles.length === 0) {
    await prisma.article.createMany({
      data,
    });
  }

  console.log({ data });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
