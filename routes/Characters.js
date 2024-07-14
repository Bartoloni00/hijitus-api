import express from 'express'
import CharactersController from '../controllers/Characters.js'

const CharactersRoutes = express.Router()

CharactersRoutes.get('/characters',CharactersController.getAll)

export default CharactersRoutes