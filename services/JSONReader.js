import { readFile } from "fs/promises"

async function getJson(URLfile)
{
const file = await readFile(URLfile, 'utf-8')
console.log('llego al service json');
return JSON.parse(file)
}

export {
    getJson
}