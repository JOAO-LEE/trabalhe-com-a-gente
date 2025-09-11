import express, { type Application } from "express";
import { type Request, type Response } from "express";

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Application running on port 3000")
});

export default app;
