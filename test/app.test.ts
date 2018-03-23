import { ServerInjectOptions } from 'hapi';
import { server } from '../src/app';

describe('GET /', () => {
  it('should return 200', async () => {
    const request: ServerInjectOptions = {
      url: '/',
      method: 'GET',
      app: {}
    };
    // Wait for the server to be loaded
    await server;
    const response = await server.inject(request);

    expect(response.statusCode).toBe(200);
  });

});
