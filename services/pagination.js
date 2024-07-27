import { getJson } from "../services/JSONReader.js";

export const countElements = async() => await getJson('./db/characters.json').length;

export async function pagination(
  page = 1,
  itemsPage = 20
) {
    // Comprobar el numero de items por pagina
    if (itemsPage < 1 || itemsPage > 20) {
        itemsPage = 20;
    }
    if (page < 1) {
        page = 1;
    }
    const total = await countElements();
    const pages = Math.ceil(total / itemsPage);
    return {
        page,
        skip: (page - 1) * itemsPage,
        itemsPage,
        total,
        pages
    };
}