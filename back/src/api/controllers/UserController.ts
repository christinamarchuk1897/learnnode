import { Request, Response } from "express";
import { Repository } from  'typeorm';
import connection from "../../../db_connection";
import User from '../models/User'
import bcrypt from 'bcryptjs';

class UserController {
    constructor() {};

    public async create(req: Request, res: Response) {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        try {
            const hash:any = await bcrypt.hash(password, 10);

            const requestData: {
                firstName: string,
                lastName: string,
                email: string,
                hash: string
            } = {
                firstName,
                lastName,
                email,
                hash
            };

            const repo: Repository<User> = connection.getRepository(User);
            const created = await repo.findOne( { where:
                { email: requestData.email }
            });

            if (!created) {
                const newUser = await repo.create({
                    first_name: requestData.firstName,
                    last_name: requestData.lastName,
                    email: requestData.email,
                    password: requestData.hash
                });

                newUser.save();

                return res.status(200).json({
                    msg: 'User has been succesfully created',
                    data: newUser
                });
            } else {
                return res.status(200).json("User has already created");
            }
        } catch (error) {
            throw new Error(error);
        }

    }
}
export default new UserController();