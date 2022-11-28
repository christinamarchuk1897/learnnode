import express from "express";
import auth from '../middleware/auth';
import { check } from 'express-validator';
import rolePermission from '../middleware/rolePermission';
import ProductController from "../controllers/ProductController";
const app = express();
const router = express.Router();

// router.get('/', auth, rolePermission, (req: Request, res: Response, next: NextFunction) => {
//     return res.send({msg: 'it works!'});
// });


router.get('/create',
           auth,
           rolePermission,
        //    check('categoryName').isLength({min: 2}),
        //    check('categoryDescr').isLength({min: 10}),
           ProductController.create);

export = router;