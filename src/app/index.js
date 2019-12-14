import express from 'express';
import  bodyParser from 'body-parser';
import productRouter from './routes/restaurant';

const app = express();
app.use(bodyParser.json());
app.use(productRouter); 

export default app;