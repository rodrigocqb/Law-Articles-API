import { Article } from "@prisma/client";
import { prisma } from "../config/database";

async function findAllArticles(): Promise<Article[]> {
  return prisma.article.findMany();
}

async function findArticlesByCategory(category: string): Promise<Article[]> {
  return prisma.article.findMany({
    where: {
      category,
    },
  });
}

async function findArticlesByKeyWord(keyword: string): Promise<Article[]> {
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

export const articleRepository = { findAllArticles, findArticlesByCategory, findArticlesByKeyWord };
