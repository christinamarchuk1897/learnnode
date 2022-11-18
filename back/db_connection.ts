import { DataSource } from 'typeorm';
import User from './src/api/models/User'
const connection =  new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'dev',
    database: 'dev',
    entities: [User],
    synchronize: true
});

export default connection;