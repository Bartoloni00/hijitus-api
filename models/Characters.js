import charactersFilters from "../services/charactersFilters.js";
import { getJson } from "../services/JSONReader.js";

export default class CharactersModel
{
    static async getAll(filters = {})
    {
        let characters = await getJson('./db/characters.json')

        if(characters.length < 1) throw new Error('Characters not found')
        
        // Devolvemos todos para usarlo en la selección por id y por random
        if (!Object.keys(filters).length) return characters
        
        return charactersFilters(filters, characters)
    }

    static async getById(id)
    {
        const characters = await this.getAll();

        for (let i = 0; i < characters.length; i++) {
            if (characters[i].id == id) return characters[i]
        }

        throw new Error('Characters not found')
    }

    static async getRandom()
    {
        const characters = await this.getAll()
        const randomId = Math.floor(Math.random() * (characters.length - 1) + 1)

        return this.getById(randomId)
    }
}