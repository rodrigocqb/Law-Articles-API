import { Article } from "@prisma/client";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { articleService } from "../services/articleService";

export async function getArticles(req: Request, res: Response) {
  try {
    const articles: Article[] = await articleService.getArticles();

    return res.status(httpStatus.OK).send(articles);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function getArticlesByCategory(req: Request, res: Response) {
  try {
    const { category } = req.params;

    const articles: Article[] = await articleService.getArticlesByCategory(
      category
    );

    return res.status(httpStatus.OK).send(articles);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
