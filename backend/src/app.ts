import express, { type Application } from "express";
import { githubController } from "./controllers/github/github.controller";
import { verifyQueryAndPageMiddleware } from "./middlewares/verifyQueryAndPage";
import cors from "cors";

const app: Application = express();

app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());

app.use("/", verifyQueryAndPageMiddleware, githubController);

export default app;
