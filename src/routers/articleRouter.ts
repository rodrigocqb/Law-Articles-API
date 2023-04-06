import { Router } from "express";
import {
  getArticles,
  getArticlesByCategory,
  getArticlesByKeyWord,
} from "../controllers/articleController";

const articleRouter = Router();

articleRouter
  .get("/", getArticles)
  .get("/category/:category", getArticlesByCategory)
  .get("/search/:keyword", getArticlesByKeyWord);

export { articleRouter };
