import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dbConnect from './config/dbConnect';
import errorHandler from './middleware/error-middleware';
import router from './routes';
require('dotenv').config();

dbConnect();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());
app.use('/api', router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`started ${PORT}`);
});