// tests/auth.test.js
const request = require('supertest');
const app = require('../src/app');

describe('User Authentication Test', () => {
  test('It should return a JWT access and refresh token for valid credentials', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ username: 'username', password: 'password' });
    expect(response.statusCode).toBe(200);
    expect(response.body.access_token).toBeDefined();
    expect(response.body.refresh_token).toBeDefined();
  });

  test('It should return a 400 error for missing credentials', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ username: 'invalid' });
    expect(response.statusCode).toBe(400);
  });

  test('It should return a 401 error for invalid credentials', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ username: 'invalid', password: 'invalid' });
    expect(response.statusCode).toBe(401);
  });
});
