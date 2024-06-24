const request = require('supertest');
const app = require('../index'); // Importa la aplicación desde index.js
const { Connection } = require('../db/connection.db'); // Importa la clase Connection

// Variables para realizar las pruebas
const DEvent_test = {
    id: 10,
    NombreTipoEvento: 'Tipo de Evento de prueba'
};

const DPE_test = {
    id: 2,
    detalle: "detalle de prueba",
    estado: true
};

const event_test = {
    id: 1,
    NombreEvento: 'Evento de prueba',
    id_tipo_Evento: DEvent_test.id,
    Estado: true
};

const PE_test = {
    id: 1,
    id_evento: event_test.id,
    fechaEvento: '2023-01-01T10:00:00Z',
    id_detalle_pago: DPE_test.id,
    Estado: true
};

describe('Pago Externo API', () => {
    beforeAll(async () => {
        // Crear el detalle del evento antes de todas las pruebas
        const detalleEventoResponse = await request(app)
            .post('/api/detalleEventos')
            .send(DEvent_test);

        expect(detalleEventoResponse.status).toBe(200);

        // Crear el evento antes de todas las pruebas
        const eventoResponse = await request(app)
            .post('/api/events')
            .send(event_test);

        expect(eventoResponse.status).toBe(200);

        // Crear el detalle de pago externo antes de todas las pruebas
        const detallePagoResponse = await request(app)
            .post('/api/detallePagoExternos')
            .send(DPE_test);

        expect(detallePagoResponse.status).toBe(200);
    });

    afterAll(async () => {
        // Eliminar el detalle de pago externo después de todas las pruebas
        const detallePagoResponse = await request(app).delete(`/api/detallePagoExternos/${DPE_test.id}`);
        expect(detallePagoResponse.status).toBe(200);

        // Eliminar el evento después de todas las pruebas
        const eventoResponse = await request(app).delete(`/api/events/${event_test.id}`);
        expect(eventoResponse.status).toBe(200);

        // Eliminar el detalle del evento después de todas las pruebas
        const detalleEventoResponse = await request(app).delete(`/api/detalleEventos/${DEvent_test.id}`);
        expect(detalleEventoResponse.status).toBe(200);

        // Agregar un pequeño retraso antes de cerrar la conexión para asegurarse de que todas las operaciones hayan terminado
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await Connection.close(); // Cierra la conexión a la base de datos después de todas las pruebas
    });

    describe('POST /api/PagoExternos', () => {
        test('debería crear un nuevo pago externo después de crear un detalle de pago y un evento', async () => {
            const response = await request(app)
                .post('/api/PagoExternos')
                .send(PE_test);

            expect(response.status).toBe(200);
            expect(response.body.msg).toMatch(/creó satisfactoriamente/);
        });
    });

    describe('GET /api/PagoExternos', () => {
        test('debería retornar un array con todos los pagos externos', async () => {
            const response = await request(app).get('/api/PagoExternos');
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.PexternosList)).toBe(true);
        });
    });

    describe('GET /api/PagoExternos/:id', () => {
        test('debería retornar el pago externo correspondiente al ID especificado', async () => {
            const response = await request(app).get(`/api/PagoExternos/${PE_test.id}`);
            expect(response.status).toBe(200);
            expect(response.body.id).toBe(PE_test.id);
        });
    });

    describe('PUT /api/PagoExternos/:id', () => {
        test('debería actualizar el pago externo correspondiente al ID especificado', async () => {
            PE_test.fechaEvento = "2023-01-02T12:00:00Z";
            PE_test.Estado = false;
            const response = await request(app)
                .put(`/api/PagoExternos/${PE_test.id}`)
                .send(PE_test);

            expect(response.status).toBe(200);
        });
    });

    describe('DELETE /api/PagoExternos/:id', () => {
        test('debería eliminar el pago externo correspondiente al ID especificado', async () => {
            const response = await request(app).delete(`/api/PagoExternos/${PE_test.id}`);
            expect(response.status).toBe(200);
        });
    });
});
