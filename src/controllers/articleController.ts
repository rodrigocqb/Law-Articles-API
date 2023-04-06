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
