import express, { type Application } from "express";
import { githubController } from "./controllers/github/github.controller.ts";

const app: Application = express();

app.use(express.json());

app.use("/", githubController);

export default app;
