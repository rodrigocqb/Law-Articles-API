import { Router } from "express";
import { getArticles } from "../controllers/articleController";

const articleRouter = Router();

articleRouter.get("/", getArticles);

export { articleRouter };
