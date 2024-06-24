const request = require('supertest');
const app = require('../index'); // Importa la aplicación desde index.js
const { Connection } = require('../db/connection.db'); // Importa la clase Connection

// Variables para realizar las pruebas
const cargos_test = {
    id: 2,
    Nombre: 'Evento de cargo',
    seccionCargo: 'Seccion de test',
    Estado: true
};

const student_test = {
    id: 1,
    Nombre: 'Nombre test',
    Apellido: 'Apellido de test',
    Edad: 12,
    Carrera: 'Carrera test',
    Semestre: 12,
    id_Cargo: 2,
    Estado: true,
    Cedula: '6516156',
    Correo: 'correo test',
    Contrasena: 'Contrasenia test'
};

describe('Students API', () => {
    beforeAll(async () => {
        // Crear el cargo antes de todas las pruebas
        const cargoResponse = await request(app)
            .post('/api/cargos')
            .send(cargos_test);

        expect(cargoResponse.status).toBe(200);
    });

    afterAll(async () => {
        // Eliminar el cargo después de todas las pruebas
        const cargoResponse = await request(app).delete(`/api/cargos/${cargos_test.id}`);
        expect(cargoResponse.status).toBe(200);

        // Agregar un pequeño retraso antes de cerrar la conexión para asegurarse de que todas las operaciones hayan terminado
        await new Promise((resolve) => setTimeout(resolve, 500));
        await Connection.close(); // Cierra la conexión a la base de datos después de todas las pruebas
    });

    describe('POST /api/students', () => {
        test('debería crear un nuevo estudiante después de crear un cargo', async () => {
            // Crear el estudiante utilizando la clave foránea del cargo
            const response = await request(app)
                .post('/api/students')
                .send(student_test);

            expect(response.status).toBe(200);
        });
    });

    describe('GET /api/students', () => {
        test('debería retornar un array con todos los estudiantes', async () => {
            const response = await request(app).get('/api/students');
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.studentsList)).toBe(true);
        });
    });

    describe('GET /api/students/:id', () => {
        test('debería retornar el estudiante correspondiente al ID especificado', async () => {
            const response = await request(app).get(`/api/students/${student_test.id}`);
            expect(response.status).toBe(200);
            expect(response.body.id).toBe(student_test.id);
        });
    });

    describe('PUT /api/students/:id', () => {
        test('debería actualizar el estudiante correspondiente al ID especificado', async () => {
            student_test.Nombre = "Nuevo nombre de estudiante";
            const response = await request(app)
                .put(`/api/students/${student_test.id}`)
                .send(student_test);

            expect(response.status).toBe(200);
        });
    });

    describe('DELETE /api/students/:id', () => {
        test('debería eliminar el estudiante correspondiente al ID especificado', async () => {
            const response = await request(app).delete(`/api/students/${student_test.id}`);
            expect(response.status).toBe(200);
        });
    });
});
