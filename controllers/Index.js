import {index} from '../models/Index.js'
import indexView from '../views/index.js'
import { httpStatusCodes as code } from '../services/httpStatusCodes.js'

export default class IndexController
{
    static async index(req,res)
    {
        index()
        .then(result => res.status(code.OK).send(indexView(result)))
        .catch(err => res.status(code.INTERNAL_SERVER).send(err.message))
    }
}