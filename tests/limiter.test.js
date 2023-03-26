// File: tests/limiter.test.js

const request = require('supertest');
const app = require('../src/app');

describe('Rate Limit Test', () => {
  test('It should limit requests to 100 per minute', async () => {
    const requests = Array.from({ length: 101 }, () =>
      request(app).get('/auth/ping'),
    );

    const responses = await Promise.all(requests);
    const successfulResponse = responses[99];
    const rateLimitedResponse = responses[100];

    expect(successfulResponse.statusCode).toBe(200);
    expect(rateLimitedResponse.statusCode).toBe(429);
    expect(rateLimitedResponse.text).toBe(
      'Too many requests from this IP, please try again after a minute.',
    );
  });
});
