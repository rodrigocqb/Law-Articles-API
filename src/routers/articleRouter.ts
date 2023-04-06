import { Router } from "express";
import {
  getArticles,
  getArticlesByCategory,
  getArticlesByKeyword,
} from "../controllers/articleController";

const articleRouter = Router();

articleRouter
  .get("/", getArticles)
  .get("/category/:category", getArticlesByCategory)
  .get("/search/:keyword", getArticlesByKeyword);

export { articleRouter };
