import { app } from "../app.js"
import request from 'supertest'
import { verifyCharacterObject } from "./verify.js"
import {categoryValues, genderValues, personalityValues, speciesValues} from '../services/validValues.js'

describe('GET /Characters/{id}', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/characters/1').send()
        expect(response.statusCode).toBe(200)
    }) 
    test('should respond with a JSON', async () => {
        const response = await request(app).get('/characters/1').send()
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toBeInstanceOf(Object)
    })
    test('JSON should contain the Result Pattern format', async () => {
        const response = await request(app).get('/characters/1').send()
        expect(response.body.success).toBe(true)

        // Verificar que 'data' es un array
        expect(Array.isArray(response.body.data)).toBe(false)

        // Verificar la estructura de los elementos dentro del array 'data'
        const character = response.body.data
        verifyCharacterObject(character)

        // Verificar que ciertas propiedades contengan valores validos
        expect(categoryValues).toContain(character.category)
        expect(speciesValues).toContain(character.species);
        expect(genderValues).toContain(character.gender);
        expect(personalityValues).toContain(character.personality);
    })
})