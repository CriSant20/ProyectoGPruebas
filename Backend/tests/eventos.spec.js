const request = require('supertest');
const app = require('../index'); // Importa la aplicación desde index.js
const { Connection } = require('../db/connection.db'); // Importa la clase Connection

// Variables para realizar las pruebas
const DEvent_test = {
    id: 10,
    NombreTipoEvento: 'Tipo de Evento de prueba'
};

const event_test = {
    id: 1,
    NombreEvento: 'Evento de prueba',
    id_tipo_Evento: 10, 
    Estado: true
};

describe('Eventos API', () => {
    beforeAll(async () => {
        // Crear el detalle del evento antes de todas las pruebas
        const detalleEventoResponse = await request(app)
            .post('/api/detalleEventos')
            .send(DEvent_test);

        expect(detalleEventoResponse.status).toBe(200);
    });
    afterAll(async () => {
        const response = await request(app).delete(`/api/detalleEventos/${DEvent_test.id}`);
        expect(response.status).toBe(200);

        // Agregar un pequeño retraso antes de cerrar la conexión para asegurarse de que todas las operaciones hayan terminado
        await new Promise((resolve) => setTimeout(resolve, 500));
        await Connection.close(); // Cierra la conexión a la base de datos después de todas las pruebas
    });

    describe('POST /api/events', () => {
        test('debería crear un nuevo evento después de crear un detalle de evento', async () => {
            // Crear el evento utilizando la clave foránea del detalle del evento
            const response = await request(app)
                .post('/api/events')
                .send(event_test);

            expect(response.status).toBe(200);
        });
    });

    describe('GET /api/events', () => {
        test('debería retornar un array con todos los eventos', async () => {
            const response = await request(app).get('/api/events');
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.eventosList)).toBe(true);
        });
    });

    describe('GET /api/events/:id', () => {
        test('debería retornar el evento correspondiente al ID especificado', async () => {
            const response = await request(app).get(`/api/events/${event_test.id}`);
            expect(response.status).toBe(200);
            expect(response.body.id).toBe(event_test.id);
        });
    });

    describe('PUT /api/events/:id', () => {
        test('debería actualizar el evento correspondiente al ID especificado', async () => {
            event_test.NombreEvento = "Nuevo nombre de evento";
            const response = await request(app)
                .put(`/api/events/${event_test.id}`)
                .send(event_test);

            expect(response.status).toBe(200);
        });
    });

    describe('DELETE /api/events/:id', () => {
        test('debería eliminar el evento correspondiente al ID especificado', async () => {
            const response = await request(app).delete(`/api/events/${event_test.id}`);
            expect(response.status).toBe(200);
        });
    });
});
