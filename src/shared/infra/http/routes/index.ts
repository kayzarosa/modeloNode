import { Router } from 'express';

import helloWorldRouter from '@modules/helloWorld/infra/http/routes/hello.world.routes';

const routes = Router();

routes.use('/', helloWorldRouter);

export default routes;
