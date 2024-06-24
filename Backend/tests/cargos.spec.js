const request = require('supertest');
const app = require('../index'); // Importa la aplicación desde index.js
const { Connection } = require('../db/connection.db'); // Importa la clase Connection

// Variables para realizar las pruebas
const Cargos_test = {
    id: 1,
    Nombre: 'Evento de cargo',
    seccionCargo: 'Seccion de test',
    Estado: true
};

describe('Cargos API', () => {
    afterAll(async () => {
        // Agregar un pequeño retraso antes de cerrar la conexión para asegurarse de que todas las operaciones hayan terminado
        await new Promise((resolve) => setTimeout(resolve, 500));
        await Connection.close(); // Cierra la conexión a la base de datos después de todas las pruebas
    });

    describe('GET /api/cargos', () => {
        test('debería retornar un array con todos los cargos', async () => {
            const response = await request(app).get('/api/cargos');
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.cargosList)).toBe(true);
        });
    });

    describe('POST /api/cargos', () => {
        test('debería crear un nuevo cargo', async () => {
            const response = await request(app)
                .post('/api/cargos')
                .send(Cargos_test);

            expect(response.status).toBe(200);
            expect(response.body.msg).toMatch(/creó satisfactoriamente/);
        });
    });

    describe('GET /api/cargos/:id', () => {
        test('debería retornar el cargo correspondiente al ID especificado', async () => {
            const response = await request(app).get(`/api/cargos/${Cargos_test.id}`);
            expect(response.status).toBe(200);
            expect(response.body.id).toBe(Cargos_test.id);
        });
    });

    describe('PUT /api/cargos/:id', () => {
        test('debería actualizar el cargo correspondiente al ID especificado', async () => {
            Cargos_test.Nombre = "Nuevo nombre de cargo";
            const response = await request(app)
                .put(`/api/cargos/${Cargos_test.id}`)
                .send(Cargos_test);

            expect(response.status).toBe(200);
        });
    });

    describe('DELETE /api/cargos/:id', () => {
        test('debería eliminar el cargo correspondiente al ID especificado', async () => {
            const response = await request(app).delete(`/api/cargos/${Cargos_test.id}`);
            expect(response.status).toBe(200);
        });
    });
});
