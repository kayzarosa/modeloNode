import HelloWorldService from './HelloWorldService';

let helloWorldService: HelloWorldService;

describe('HelloWorldService', () => {
  beforeEach(() => {
    helloWorldService = new HelloWorldService();
  });

  it('should bring the message of hello world', async () => {

    const helloWorld = await helloWorldService.execute();

    expect(helloWorld).toEqual(
      expect.objectContaining(
        {
          message: "Hello World",
          name: "Visitor"
        }
      ),
    );
  });
});