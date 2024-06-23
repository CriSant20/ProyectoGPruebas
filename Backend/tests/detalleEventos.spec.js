const request = require('supertest');
const app = require('../index'); // Importa la aplicación desde index.js
const { Connection } = require('../db/connection.db'); // Importa la clase Connection

// Variables para realizar las pruebas
const DEvent_test = {
    id: 1,
    NombreTipoEvento: 'Evento de prueba'
};

describe('Detalle de Eventos API', () => {
    afterAll(async () => {
        // Agregar un pequeño retraso antes de cerrar la conexión para asegurarse de que todas las operaciones hayan terminado
        await new Promise((resolve) => setTimeout(resolve, 500));
        await Connection.close(); // Cierra la conexión a la base de datos después de todas las pruebas
    });

    describe('GET /api/detalleEventos', () => {
        test('debería retornar un array con todos los detalles de eventos', async () => {
            const response = await request(app).get('/api/detalleEventos');
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.DeventosList)).toBe(true);
        });
    });

    describe('POST /api/detalleEventos', () => {
        test('debería crear un nuevo detalle de evento', async () => {
            const response = await request(app)
                .post('/api/detalleEventos')
                .send(DEvent_test);

            expect(response.status).toBe(200);
        });
    });

    describe('GET /api/detalleEventos/:id', () => {
        test('debería retornar el detalle de evento correspondiente al ID especificado', async () => {
            const response = await request(app).get(`/api/detalleEventos/${DEvent_test.id}`);
            expect(response.status).toBe(200);
            expect(response.body.id).toBe(DEvent_test.id);
        });
    });

    describe('PUT /api/detalleEventos/:id', () => {
        test('debería actualizar el detalle de evento correspondiente al ID especificado', async () => {
            DEvent_test.NombreTipoEvento = "Nuevo nombre de evento";
            const response = await request(app)
                .put(`/api/detalleEventos/${DEvent_test.id}`)
                .send(DEvent_test);

            expect(response.status).toBe(200);
        });
    });

    describe('DELETE /api/detalleEventos/:id', () => {
        test('debería eliminar el detalle de evento correspondiente al ID especificado', async () => {
            const response = await request(app).delete(`/api/detalleEventos/${DEvent_test.id}`);
            expect(response.status).toBe(200);
        });
    });
});
