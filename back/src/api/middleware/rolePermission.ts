import { Request, Response, NextFunction } from 'express';
import connection from "../../../db_connection";
import User from '../models/User';
import { Repository } from  'typeorm';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const repo: Repository<User> = connection.getRepository(User);
    const created = await repo.findOne( { where:
        { email: req.user.email }
    });
    console.log(created);
};

export default verifyToken;