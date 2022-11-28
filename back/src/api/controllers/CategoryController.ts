import { Request, Response } from "express";
import { Repository } from  'typeorm';
import connection from "../../../db_connection";
import Categories from '../models/Categories'
import { validationResult } from 'express-validator';


class CategoryController {
    constructor() {};

    public async create(req: Request, res: Response):Promise<any>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const repo: Repository<Categories> = connection.getRepository(Categories);
    }
}
export default new CategoryController();