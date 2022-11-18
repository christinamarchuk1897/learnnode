import express, {Request, Response} from "express";
import UserController from "../controllers/UserController";
const router = express.Router();

router.post('/', UserController.create);

export = router;