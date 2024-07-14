import { getJson } from "../services/JSONReader.js";

export default class CharactersModel
{
    // static async getCharacters({filters})
    static async getCharacters()
    {
        const characters = await getJson('./db/characters.json')

        if(characters.length < 1) throw new Error('Characters not found')
        console.log('paso el if del modelo');
        
        return characters
    }
}