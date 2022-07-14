import { Router } from 'express';

import HelloWorldController from '../controllers/HelloWorldController';

const helloWorldRouter = Router();
const helloWorldController = new HelloWorldController();

helloWorldRouter.get('/', helloWorldController.show);

export default helloWorldRouter;
