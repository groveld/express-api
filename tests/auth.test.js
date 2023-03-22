// tests/auth.test.js
const request = require('supertest');
const app = require('../src/app');

describe('Auth Endpoint', () => {
  test('It should return a JWT token for valid credentials', async () => {
    const response = await request(app)
      .post('/auth')
      .send({ username: 'username', password: 'password' });
    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  test('It should return a 401 error for invalid credentials', async () => {
    const response = await request(app)
      .post('/auth')
      .send({ username: 'invalid', password: 'invalid' });
    expect(response.statusCode).toBe(401);
  });
});
