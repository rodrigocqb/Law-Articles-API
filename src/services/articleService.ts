import { Article } from "@prisma/client";
import { articleRepository } from "../repositories/articleRepository";

async function getArticles(): Promise<Article[]> {
  return articleRepository.findAllArticles();
}

export const articleService = { getArticles };
