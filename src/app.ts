import express, { json } from "express";
import cors from "cors";
import { articleRouter } from "./routers/articleRouter";

const app = express();

app.use(json()).use(cors()).use("/articles", articleRouter);

export default app;
