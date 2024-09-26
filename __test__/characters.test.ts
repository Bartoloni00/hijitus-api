import { app } from "../app"
import request from 'supertest'
import { verifyCharacterObject, verifyPaginationObject } from "./verify"
import {categoryValues, genderValues, personalityValues, speciesValues} from '../services/validValues'

describe ('GET /characters', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/characters').send()
        expect(response.statusCode).toBe(200)
    }) 

    test('should respond with a JSON', async () => {
        const response = await request(app).get('/characters').send()
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toBeInstanceOf(Object)
    })

    test('JSON should contain the Result Pattern format', async () => {
        const response = await request(app).get('/characters').send()

        // Verificar que 'success' es un booleano
        expect(response.body.success).toBe(true)
        verifyPaginationObject(response.body.pagination)

        // Verificar que 'data' es un array
        expect(Array.isArray(response.body.data)).toBe(true)

        // Verificar la estructura de los elementos dentro del array 'data'
        response.body.data.forEach((character: Character) => {
            verifyCharacterObject(character)

            // Verificar que ciertas propiedades contengan valores validos
            expect(categoryValues).toContain(character.category)
            expect(speciesValues).toContain(character.species);
            expect(genderValues).toContain(character.gender);
            expect(personalityValues).toContain(character.personality);
        })
    })

    test('filter for category', async () => {
        const response = await request(app).get('/characters?category=secundario').send()

        // Verificar que 'success' es un booleano
        expect(response.body.success).toBe(true)
        verifyPaginationObject(response.body.pagination)

        // Verificar que 'data' es un array
        expect(Array.isArray(response.body.data)).toBe(true)

        // Verificar la estructura de los elementos dentro del array 'data'
        response.body.data.forEach((character: Character) => {
            verifyCharacterObject(character)

            // Verificar que ciertas propiedades contengan valores validos
            expect('Secundario').toContain(character.category)
            expect(speciesValues).toContain(character.species);
            expect(genderValues).toContain(character.gender);
            expect(personalityValues).toContain(character.personality);
        })
    })
    
    test('filter for species', async () => {
        const response = await request(app).get('/characters?species=humano').send()
        expect(response.body.success).toBe(true)
        verifyPaginationObject(response.body.pagination)
        expect(Array.isArray(response.body.data)).toBe(true)

        response.body.data.forEach((character: Character) => {
            verifyCharacterObject(character)

            // Verificar que ciertas propiedades contengan valores validos
            expect(categoryValues).toContain(character.category)
            expect('Humano').toContain(character.species);
            expect(genderValues).toContain(character.gender);
            expect(personalityValues).toContain(character.personality);
        })
    })

    test('filter for personality', async () => {
        const response = await request(app).get('/characters?personality=neutral').send()
        expect(response.body.success).toBe(true)
        verifyPaginationObject(response.body.pagination)
        expect(Array.isArray(response.body.data)).toBe(true)

        response.body.data.forEach((character: Character) => {
            verifyCharacterObject(character)

            // Verificar que ciertas propiedades contengan valores validos
            expect(categoryValues).toContain(character.category)
            expect(speciesValues).toContain(character.species);
            expect(genderValues).toContain(character.gender);
            expect('Neutral').toContain(character.personality);
        })
    })
    test('filter for gender', async () => {
        const response = await request(app).get('/characters?gender=femenino').send()
        expect(response.body.success).toBe(true)
        verifyPaginationObject(response.body.pagination)
        expect(Array.isArray(response.body.data)).toBe(true)

        response.body.data.forEach((character: Character) => {
            verifyCharacterObject(character)

            // Verificar que ciertas propiedades contengan valores validos
            expect(categoryValues).toContain(character.category)
            expect(speciesValues).toContain(character.species);
            expect('Femenino').toContain(character.gender);
            expect(personalityValues).toContain(character.personality);
        })
    })
    test('filter for description', async () => {
        const response = await request(app).get('/characters?description=amigo%20de%20hijitus').send()
        expect(response.body.success).toBe(true)
        verifyPaginationObject(response.body.pagination)
        expect(Array.isArray(response.body.data)).toBe(true)

        response.body.data.forEach((character: Character) => {
            verifyCharacterObject(character)

            // Verificar que ciertas propiedades contengan valores validos
            expect(categoryValues).toContain(character.category)
            expect(speciesValues).toContain(character.species);
            expect(genderValues).toContain(character.gender);
            expect(personalityValues).toContain(character.personality);

            expect(character.description).toMatch(/amigo de hijitus/i)
        })
    })
    test('All filters', async () => {
        const response = await request(app).get('/characters?species=humano&personality=bueno&gender=masculino&category=protagonista&description=amigo%20de%20hijitus').send()
        expect(response.body.success).toBe(true)
        verifyPaginationObject(response.body.pagination)
        expect(Array.isArray(response.body.data)).toBe(true)

        response.body.data.forEach((character: Character) => {
            verifyCharacterObject(character)

            // Verificar que ciertas propiedades contengan valores validos
            expect('Protagonista').toContain(character.category)
            expect('Humano').toContain(character.species);
            expect('Masculino').toContain(character.gender);
            expect('Bueno').toContain(character.personality);

            expect(character.description).toMatch(/amigo de hijitus/i)
        })
    })
})

