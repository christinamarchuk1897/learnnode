import express from "express";
import { check } from 'express-validator';
import CategoryController from "../controllers/CategoryController";
import auth from '../middleware/auth';
import rolePermission from '../middleware/rolePermission';
const app = express();
const router = express.Router();

// router.get('/', auth, rolePermission, (req: Request, res: Response, next: NextFunction) => {
//     return res.send({msg: 'it works!'});
// });
router.post('/create', auth, rolePermission, check('categoryName').isLength({min: 2}), check('categoryDescr').isLength({min: 10}), CategoryController.create);

export = router;