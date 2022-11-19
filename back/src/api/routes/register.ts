import express, {Request, RequestParamHandler, Response} from "express";
import UserController from "../controllers/UserController";
import { check } from 'express-validator';
const router = express.Router();


router.post('/',
        check('firstName').isLength({
            min: 1
        }).trim().isString().matches(/^[A-Za-z]+$/),
        check('lastName').isLength({
            min: 1
        }).trim().isString().matches(/^[A-Za-z]+$/),
        check('email').isEmail(),
        check('password').isLength({min: 5}),
        check('passwordConfirmation').custom((value, { req }) => {
            if (value !== req.body.password) {
              throw new Error('Password confirmation does not match password');
            }
            return true;
          }),
        UserController.create);




export = router;