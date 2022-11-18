import express, {Request, Response} from "express";
import LoginController from "../controllers/LoginController";
const router = express.Router();

router.get('/', LoginController.index);
router.post('/', LoginController.login);

export = router;