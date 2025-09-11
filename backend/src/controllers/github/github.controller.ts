import { type Request, type Response } from "express";
import { getRepoBySearchParamService } from "../../services/github/github.service.ts";
import { CustomError } from "../../Error/Error.ts";

export const githubController = async (req: Request, res: Response) => {
    const { query } = req.query;
    try {
        const repositories = await getRepoBySearchParamService(query!.toString());
        return res.status(200).json(repositories)
    } catch (error) {
        if (error instanceof CustomError) {
            return res.status(error.cause).json({ message: error.message });
        }
        return res.status(500).json({ message: "Some error occurred. Please, try again later." })
    }
}
