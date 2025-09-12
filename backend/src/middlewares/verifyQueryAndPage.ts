import { NextFunction, Request, Response } from "express";

export const verifyQueryAndPageMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { q, page } = req.query

    if (!q) {
        return res.status(400).json({ message: "Search term required." })
    }

    if (!page) {
        return res.status(400).json({ message: "Page required." })
    }

    next()
}