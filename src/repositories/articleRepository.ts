import { Article } from "@prisma/client";
import { prisma } from "../config/database";

async function findAllArticles(): Promise<Article[]> {
  return prisma.article.findMany({
    orderBy: {
      date: "desc",
    },
  });
}

async function findArticlesByCategory(category: string): Promise<Article[]> {
  return prisma.article.findMany({
    where: {
      category,
    },
  });
}

async function findArticlesByKeyword(keyword: string): Promise<Article[]> {
  return prisma.article.findMany({
    where: {
      OR: [
        {
          title: { contains: keyword },
        },
        { content: { search: keyword } },
      ],
    },
  });
}

export const articleRepository = {
  findAllArticles,
  findArticlesByCategory,
  findArticlesByKeyword,
};
