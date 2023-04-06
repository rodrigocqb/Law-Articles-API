import { Article } from "@prisma/client";
import { articleRepository } from "../repositories/articleRepository";

async function getArticles(): Promise<Article[]> {
  return articleRepository.findAllArticles();
}

async function getArticlesByCategory(category: string): Promise<Article[]> {
  if (!category) throw "Bad Request!";

  return articleRepository.findArticlesByCategory(category);
}

async function getArticlesByKeyword(keyword: string): Promise<Article[]> {
  if (!keyword) throw "Bad Request!";

  return articleRepository.findArticlesByKeyword(keyword);
}

export const articleService = {
  getArticles,
  getArticlesByCategory,
  getArticlesByKeyword,
};
