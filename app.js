import express from 'express';
import cors from 'cors';
import CharactersRoutes from './routes/Characters.js';
import IndexController from './controllers/Index.js';

const app = new express()
const port = 3333

app.use(express.urlencoded({ extended : false }))
app.use('/static', express.static('static'))
app.use(express.json())
app.use(cors())

app.use(CharactersRoutes)
app.use('/', IndexController.index)

export {app, port}