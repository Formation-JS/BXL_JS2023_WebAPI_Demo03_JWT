import { Router } from 'express';
import messageController from '../controllers/message.controller.js';
import { authorizeMiddleware } from '../middlewares/authentification.middleware.js';


const messageRouter = Router();

messageRouter.route('/hello')
    .get(messageController.hello);

messageRouter.route('/protected')
    .get(authorizeMiddleware(), messageController.protected);

messageRouter.route('/admin')
    .get(authorizeMiddleware('admin'), messageController.admin);

export default messageRouter;