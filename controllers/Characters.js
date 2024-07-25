import Result from "../services/ResultsPattern.js"
import CharactersModel from "../models/Characters.js"

export default class CharactersController
{
    static async getAllCharacters(req, res)
    {
        const filters = req.query
        CharactersModel.getAll(filters)
        .then(characters => res.status(200).json(Result.success(characters)))
        .catch(error => res.status(404).json(Result.failure(error.message)))
    }

    static async getCharacter(req, res)
    {
        const id = req.params.id
        CharactersModel.getById(id)
        .then(character => res.status(200).json(Result.success(character)))
        .catch(error => res.status(404).json(Result.failure(error.message)))
    }

    static async getRandomCharacter(req, res)
    {
        CharactersModel.getRandom()
        .then(character => res.status(200).json(Result.success(character)))
        .catch(error => res.status(404).json(Result.failure(error.message)))
    }
}