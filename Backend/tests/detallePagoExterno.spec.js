const request = require('supertest');
const app = require('../index'); // Importa la aplicación desde index.js
const {Connection}  = require('../db/connection.db'); // Importa la clase Connection

//variables para realizar las pruebas
const DPE_test = {
    id: 1,
    detalle: 'Detalle de prueba',
    estado: 1
};

describe('Detalle de Pago Externo API', () => {
    afterAll(async () => {
        // Agregar un pequeño retraso antes de cerrar la conexión para asegurarse de que todas las operaciones hayan terminado
        await new Promise((resolve) => setTimeout(resolve, 500));
        await Connection.close(); // Cierra la conexión a la base de datos después de todas las pruebas
    });

    describe('GET /api/detallePagoExternos', () => {
        test('debería retornar un array con todos los detalles de pago externos', async () => {
            const response = await request(app).get('/api/detallePagoExternos');
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.PexternosList)).toBe(true);
        });
    });

    describe('POST /api/detallePagoExternos', () => {
        test('debería crear un nuevo detalle de pago externo', async () => {
            const response = await request(app)
                .post('/api/detallePagoExternos')
                .send(DPE_test);

            expect(response.status).toBe(200);
            expect(response.body.msg).toMatch(/creó satisfactoriamente/);
        });
    });

    describe('GET /api/detallePagoExternos/:id', () => {
        test('debería retornar el detalle de pago externo correspondiente al ID especificado', async () => {
            const response = await request(app).get(`/api/detallePagoExternos/${DPE_test.id}`);
            expect(response.status).toBe(200);
            expect(response.body.id).toBe(DPE_test.id);
        });
    });

    describe('PUT /api/detallePagoExternos/:id', () => {
        test('debería actualizar el detalle de pago externo correspondiente al ID especificado', async () => {
            DPE_test.detalle = "Nuevo detalle prueba PUT";
            DPE_test.estado = 0;
            const response = await request(app)
                .put(`/api/detallePagoExternos/${DPE_test.id}`)
                .send(DPE_test);

            expect(response.status).toBe(200);
        });
    });

    describe('DELETE /api/detallePagoExternos/:id', () => {
        test('debería eliminar el detalle de pago externo correspondiente al ID especificado', async () => {
            const response = await request(app).delete(`/api/detallePagoExternos/${DPE_test.id}`);
            expect(response.status).toBe(200);
        });
    });
});
