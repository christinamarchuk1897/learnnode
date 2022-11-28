import { Request, Response } from "express";
import { Repository, Like } from  'typeorm';
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

        try {
            const repo: Repository<Categories> = connection.getRepository(Categories);

            const {
                categoryName,
                categoryDescr
            } = req.body;

            const category = await repo.findOne( { where:
                { category_name: Like(`%${categoryName}%`) }
            });

            if (!category) {
                const requestData: {
                    categoryName: string,
                    categoryDescr: string,
                } = {
                    categoryName,
                    categoryDescr
                };
                const newCategory = await repo.create({
                    category_name: requestData.categoryName,
                    category_descr: requestData.categoryDescr
                });

                newCategory.save();

                return res.status(200).json({
                    succes: true,
                    msg: 'Category has been succesfully created',
                    data: newCategory
                });
            } else {
                return res.status(200).json("Category has already created");
            }
        } catch (err) {
            throw new Error(err);
        }
    }
}
export default new CategoryController();