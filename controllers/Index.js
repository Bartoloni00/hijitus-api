import {index} from '../models/Index.js'
import indexView from '../views/index.js'
export default class IndexController
{
    static async index(req,res)
    {
        index()
        .then(result => res.send(indexView(result)))
        .catch(err => res.status(500).send(err.message))
    }
}