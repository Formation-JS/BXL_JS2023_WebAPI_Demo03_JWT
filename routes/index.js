import { Router } from 'express';
import messageRouter from './message.router.js';

const mainRouter = Router();

mainRouter.use('/message', messageRouter);

export default mainRouter;