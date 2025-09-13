import { NextFunction, Request, Response } from "express";

export const verifyQueryAndPageMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { q } = req.query

    if (!q) {
        return res.status(400).json({ message: "Search term is required." })
    }

    next()
}