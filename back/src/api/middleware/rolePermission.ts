import { Request, Response, NextFunction } from 'express';
import connection from "../../../db_connection";
import User from '../models/User';
import { Repository } from  'typeorm';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    if (req.query['has_access'] == '1') {
        next();
    } else {
        res.status(403).json({message: 'Forbiden'})
    }
};

export default verifyToken;