import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Routers
import appRouter from './routers/index';
import userRouter from './routers/userRouter';

dotenv.config();
const app = express();
app.use(express.json());

app.use(appRouter);
app.use(userRouter);

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.listen(process.env.PORT, () => {
  console.log(
    `O aplicativo está sendo executado na porta ${process.env.PORT} !`
  );
});
