import express, { type Application } from "express";
import { type Request, type Response } from "express";

const app: Application = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
    const { searchQuery } = req.query;
    const githubApiUrl = `https://api.github.com/search/repositories?q=${searchQuery}`
    const response = await fetch(githubApiUrl)
    const result = await response.json()
    res.status(200).json(result)
});

export default app;
