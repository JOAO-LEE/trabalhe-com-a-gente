import { type Request, type Response } from "express";
import { getRepoBySearchParamService } from "../../services/github/github.service";
import { CustomError } from "../../Error/Error";

export const githubController = async (req: Request, res: Response) => {
    let { q, page } = req.query;
    try {
        const repositoriesResult = await getRepoBySearchParamService(q!.toString(), page!.toString());
        return res.status(200).json(repositoriesResult);
    } catch (error) {
        if (error instanceof CustomError) {
            return res.status(error.cause).json({ message: error.message });
        }
        return res.status(500).json({ message: "Some error occurred. Please, try again later." })
    }
}
