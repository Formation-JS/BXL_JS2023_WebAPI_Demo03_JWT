import { Router } from 'express';
import messageRouter from './message.router.js';
import authRouter from './auth.router.js';

const mainRouter = Router();

mainRouter.use('/message', messageRouter);
mainRouter.use('/auth', authRouter);

export default mainRouter;