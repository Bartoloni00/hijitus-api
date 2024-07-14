import express from 'express';
import cors from 'cors';
import CharactersRoutes from './routes/Characters.js';

const app = new express()
const port = 3333

app.use(express.urlencoded({ extended : false }))
app.use('/', express.static('public'))
app.use(express.json())
app.use(cors())

app.use(CharactersRoutes)

app.listen(port, ()=>{
    console.log(`App listening on port http://localhost:${port}`);
})