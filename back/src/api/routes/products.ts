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
           check('productName').isLength({min: 2}),
           check('productDescr').isLength({min: 10}),
           check('productCategory').isNumeric(),
           check('productPrice').isNumeric(),
           check('currency').isNumeric(),
           ProductController.create);

export = router;