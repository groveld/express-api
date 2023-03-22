// tests/limiter.test.js
const request = require('supertest');
const app = require('../src/app');

describe('Rate Limit Test', () => {
  test('It should limit requests to 100 per minute', async () => {
    const requests = Array.from({ length: 101 }, () =>
      request(app)
        .post('/auth')
        .send({ username: 'username', password: 'password' }),
    );

    const responses = await Promise.all(requests);
    const rateLimitedResponse = responses[100];

    expect(rateLimitedResponse.statusCode).toBe(429);
    expect(rateLimitedResponse.text).toBe(
      'Too many requests from this IP, please try again after a minute.',
    );
  });
});
