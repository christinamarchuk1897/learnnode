import { DataSource } from 'typeorm';
import User from './src/api/models/User'
import Categories from './src/api/models/Categories'
import dotenv from 'dotenv';
dotenv.config();
const connection =  new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USER_NAME,
    password: 'dev',
    database: 'dev',
    entities: [User, Categories],
    synchronize: true
});

export default connection;