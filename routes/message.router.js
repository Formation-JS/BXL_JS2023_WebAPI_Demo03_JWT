import { Router } from 'express';
import messageController from '../controllers/message.controller.js';


const messageRouter = Router();

messageRouter.route('/hello')
    .get(messageController.hello);

messageRouter.route('/protected')
    .get(messageController.protected);

messageRouter.route('/admin')
    .get(messageController.admin);

export default messageRouter;