import { Request, Response } from "express";
import { Repository, Like } from  'typeorm';
import connection from "../../../db_connection";
import Categories from '../models/Categories'
import { validationResult } from 'express-validator';


class CategoryController {

    protected repo: Repository<Categories>;
    constructor() {
        this.repo = connection.getRepository(Categories);
    };

    public async create(req: Request, res: Response):Promise<any>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {


            const {
                categoryName,
                categoryDescr
            } = req.body;

            const category = await this.repo.findOne( { where:
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
                const newCategory = await this.repo.create({
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

    public async index(req: Request, res: Response):Promise<any> {
        const result = await this.repo.find();
        if (result) {
            return res.status(200).json({data: result})
        } else {
            return res.status(404).json({msg: 'No categories'})
        }
    }
}
export default new CategoryController();