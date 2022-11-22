import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token: string | string[] | undefined = req.headers["authorization"];
    const configToken = process.env.JWT_TOKEN
    if (!token) {
       return res.status(403).send("A token is required for authentication");
    }

    try {
        const decoded = jwt.verify(token as string, configToken as string);
        return next();
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
};

export default verifyToken;