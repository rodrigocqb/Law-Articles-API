import { Article } from "@prisma/client";
import { articleRepository } from "../repositories/articleRepository";

async function getArticles(): Promise<Article[]> {
  return articleRepository.findAllArticles();
}

async function getArticlesByCategory(category: string): Promise<Article[]> {
  return articleRepository.findArticlesByCategory(category);
}

export const articleService = { getArticles, getArticlesByCategory };
