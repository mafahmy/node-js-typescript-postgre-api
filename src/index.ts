import express from 'express';
import dotenv from 'dotenv';

import indexRoutes from './routes/index';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);
app.listen(3000, () => {
    console.log('server is running on port 3000');
})