import Result from "../services/ResultsPattern.js"
import CharactersModel from "../models/Characters.js"

export default class CharactersController
{
    static async getAllCharacters(req, res)
    {
        const filters = Object.keys(req.query).length ? req.query : {page: '1', items: '10'}
        
        CharactersModel.getAll(filters)
        .then(({pagination, characters}) => res.status(200).json(Result.success(characters, pagination)))
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