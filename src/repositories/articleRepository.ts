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

export const articleRepository = { findAllArticles, findArticlesByCategory };
