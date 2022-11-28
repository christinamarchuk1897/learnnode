import express, {Request, Response} from "express";
import LoginController from "../controllers/LoginController";
import { check } from 'express-validator';
const router = express.Router();

router.get('/', LoginController.index);
router.post('/', check('email').isEmail(), check('password').isLength({min: 5}), LoginController.login);

export = router;