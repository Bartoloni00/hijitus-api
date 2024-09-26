import {index} from '../models/Index'
import indexView from '../views/index'
import { httpStatusCodes as code } from '../services/httpStatusCodes'
import { Request, Response } from 'express';

export default class IndexController
{
    static async index(_req: Request,res: Response)
    {
        index()
        .then(result => res.status(code.OK).send(indexView(result)))
        .catch(err => res.status(code.INTERNAL_SERVER).send(err.message))
    }
}