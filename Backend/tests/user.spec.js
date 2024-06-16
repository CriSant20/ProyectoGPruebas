const request = require('supertest');
const app = require('../index'); // Importa la aplicación desde index.js


describe('GET /api/users', () => {
    test('debería traer un 200 ok', async () => {
        const response = await request(app).get('/api/users').send();
        expect(response.status).toBe(200);
    });
});

