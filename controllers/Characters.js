import Result from "../services/ResultsPattern.js"
import CharactersModel from "../models/Characters.js"
import { httpStatusCodes as code } from "../services/httpStatusCodes.js"

export default class CharactersController
{
    static async getAllCharacters(req, res)
    {
        const filters = Object.keys(req.query).length ? req.query : {page: '1', items: '10'}
        
        CharactersModel.getAll(filters)
        .then(({pagination, characters}) => res.status(code.OK).json(Result.success(characters, pagination)))
        .catch(error => res.status(code.NOT_FOUND).json(Result.failure(error.message)))
    }

    static async getCharacter(req, res)
    {
        const id = req.params.id
        CharactersModel.getById(id)
        .then(character => res.status(code.OK).json(Result.success(character)))
        .catch(error => res.status(code.NOT_FOUND).json(Result.failure(error.message)))
    }

    static async getRandomCharacter(req, res)
    {
        CharactersModel.getRandom()
        .then(character => res.status(code.OK).json(Result.success(character)))
        .catch(error => res.status(code.NOT_FOUND).json(Result.failure(error.message)))
    }
}