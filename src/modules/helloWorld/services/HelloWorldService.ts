
interface IResponse {
  message: string;
  name: string;
}

class HelloWorldService {
  public async execute(): Promise<IResponse> {
    const helloWorld = {
      message: "Hello World",
      name: "Visitor"
    }

    return helloWorld;
  }
}

export default HelloWorldService;