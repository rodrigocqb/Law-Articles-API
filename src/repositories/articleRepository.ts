import { Article } from "@prisma/client";
import { prisma } from "../config/database";

async function findAllArticles(): Promise<Article[]> {
  return prisma.article.findMany();
}

export const articleRepository = { findAllArticles };
