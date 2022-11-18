
import express, {Express} from 'express';
import cors from 'cors';
import connection from './db_connection';
import products from './src/api/routes/products';
import register from './src/api/routes/register';
import login from './src/api/routes/login';
import dotenv from 'dotenv';
dotenv.config();

class App {

    private app: Express;

    constructor() {
        this.app = express();
        this.middleware();
        this.init();
        this.db();
    }

    private async db () {
        connection.initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err)
        });
    }

    private middleware(): void {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use('/products', products);
        this.app.use('/register', register)
        this.app.use('/login', login)
    }

    private async init() {
        await this.app.listen(8000, () => {
            console.log(`⚡️ Server is running at https://localhost:8000`);
        });
    }
}

export default new App();