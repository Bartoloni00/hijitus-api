import Result from "../services/ResultsPattern.js"
import CharactersModel from "../models/Characters.js"

export default class CharactersController
{
    static async getAll(req, res)
    {
        console.log('llego al controlador');

        CharactersModel.getCharacters()
        .then(characters => res.status(200).json(Result.success(characters)))
        .catch(error => res.status(404).json(Result.failure(error.message)))
    }
}