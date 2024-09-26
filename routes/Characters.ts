import express from 'express'
import CharactersController from '../controllers/Characters'

const CharactersRoutes = express.Router()

CharactersRoutes.get('/characters',CharactersController.getAllCharacters)
CharactersRoutes.get('/characters/random',CharactersController.getRandomCharacter)
CharactersRoutes.get('/characters/:id',CharactersController.getCharacter)

export default CharactersRoutes