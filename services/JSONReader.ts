import { readFile } from "fs/promises"

async function getJson(URLfile: string): Promise<Character[]>
{
const file = await readFile(URLfile, 'utf-8')
return JSON.parse(file)
}

export {
    getJson
}