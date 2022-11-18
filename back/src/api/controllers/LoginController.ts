import { Request, Response } from "express";
import { Repository } from  'typeorm';
import connection from "../../../db_connection";
import User from '../models/User'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
const JWT_KEY = process.env.JWT_TOKEN || '12345';
class LoginController {
    constructor() {}

    public index(req: Request, res: Response) {
        return res.status(200).json('WORKS!')
    }

    public async login(req: Request, res: Response) {

        const repo: Repository<User> = connection.getRepository(User);
        const {
            email,
            password
        } = req.body;

        const user = await repo.findOne( { where:
            { email: email }
        });


        if (user) {
            bcrypt.compare(password, user.password, (err, succes): void | any =>{
                if (succes) {
                    const token = jwt.sign({
                        email: user.email,
                        password: user.password
                    }, JWT_KEY  , {
                        expiresIn: '1h'
                    });
                    req.headers.authorization = 'Bearer ' + token
                    res.send(user);
                } else {
                    return res.status(200).json('Auth failed');
                }
            })
        } else {
            res.status(404).json('User does not exist');
        }

    }
}

export default new LoginController();