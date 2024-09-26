import { Request, Response } from 'express';
import Result from "../services/ResultsPattern"
import CharactersModel from "../models/Characters"
import { httpStatusCodes as code } from "../services/httpStatusCodes"

export default class CharactersController
{
    static async getAllCharacters(req: Request, res: Response): Promise<void>
    {
        const filters: Filters = Object.keys(req.query).length ? req.query : {page: '1', items: '10'}
        
        CharactersModel.getAll(filters)
        .then(({pagination, characters}) => res.status(code.OK).json(Result.success(characters, pagination)))
        .catch(error => res.status(code.NOT_FOUND).json(Result.failure(error.message)))
    }

    static async getCharacter(req: Request, res: Response): Promise<void>
    {
        const id: number = parseInt(req.params.id)
        CharactersModel.getById(id)
        .then(character => res.status(code.OK).json(Result.success(character)))
        .catch(error => res.status(code.NOT_FOUND).json(Result.failure(error.message)))
    }

    static async getRandomCharacter(_req: Request, res: Response): Promise<void>
    {
        CharactersModel.getRandom()
        .then(character => res.status(code.OK).json(Result.success(character)))
        .catch(error => res.status(code.NOT_FOUND).json(Result.failure(error.message)))
    }
}