import charactersFilters from "../services/charactersFilters";
import { getJson } from "../services/JSONReader";

export default class CharactersModel
{
    static async getAll(filters: Filters): Promise<PaginationResult>
    {
        let characters: Character[] = await getJson('./db/characters.json')

        if(characters.length < 1) throw new Error('Characters not found')
        
        return charactersFilters(characters, filters)
    }

    static async getById(id: number): Promise<Character>
    {
        const characters: Character[] = await getJson('./db/characters.json')
        if(characters.length < 1) throw new Error('Characters not found')

        for (let i = 0; i < characters.length; i++) {
            if (characters[i].id == id) return characters[i]
        }

        throw new Error('Characters not found')
    }

    static async getRandom(): Promise<Character>
    {
        const characters: Character[] = await getJson('./db/characters.json')
        if(characters.length < 1) throw new Error('Characters not found')

        const randomId: number = Math.floor(Math.random() * (characters.length - 1) + 1)

        return this.getById(randomId)
    }
}