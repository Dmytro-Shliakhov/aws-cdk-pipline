import { handler } from "../services/hello";

describe('Hello lambda describe test suite', () => {
  test('Should return status code 200', async () => {
    const result = await handler({}, {});

    expect(result.statusCode).toBe(200);
  });
});
