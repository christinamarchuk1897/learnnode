import express, {Request, Response, NextFunction} from "express";
import auth from '../middleware/auth';
import rolePermission from '../middleware/rolePermission';
const app = express();
const router = express.Router();

router.get('/', auth, rolePermission, (req: Request, res: Response, next: NextFunction) => {
    return res.send({msg: 'it works!'});
});


router.get('/create', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({msg: 'it works!'});
});

export = router;