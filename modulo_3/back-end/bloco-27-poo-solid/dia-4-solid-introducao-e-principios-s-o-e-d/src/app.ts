import express from 'express';

import plantsRouter from './router/plantsRouter';

const app = express();

app.use(express.json());

app.use('/plants', plantsRouter);

export default app;