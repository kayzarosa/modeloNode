import { Request, Response } from 'express';

import HelloWorldService from '@modules/helloWorld/services/HelloWorldService';

class HelloWorldController {
  public async show(request: Request, response: Response): Promise<Response> {

    const helloWorldService = new HelloWorldService();

    const helloWorld = await helloWorldService.execute();

    return response.status(200).json(helloWorld);
  }
}

export default HelloWorldController;