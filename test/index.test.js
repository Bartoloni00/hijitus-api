// import jest from 'jest' 
// no es necesario importar este modulo porque jest se inserta de modo global en los archivos
import { app } from "../app.js";
import request from 'supertest'

describe('GET /', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/').send()
        expect(response.statusCode).toBe(200);
    })

    test('should response with an HTML', async () => {
        const response = await request(app).get('/').send()
            // Verificar que el contenido es HTML
        expect(response.headers['content-type']).toMatch(/html/);

        // Verificar que la respuesta contiene algún HTML
        // expect(typeof response.text).toMatch('string');
        expect(response.body).toBeInstanceOf(Object);

    })
})