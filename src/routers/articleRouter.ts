import { Router } from "express";
import {
  getArticles,
  getArticlesByCategory,
} from "../controllers/articleController";

const articleRouter = Router();

articleRouter.get("/", getArticles).get("/:category", getArticlesByCategory);

export { articleRouter };
