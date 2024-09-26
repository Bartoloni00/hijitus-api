export const countElements: Function = (items: Character[]): number => items.length;

export function pagination(
    page: number = 1,
    itemsPage: number = 10,
    items: Character[]
): Pagination {
    // Comprobar el numero de items por pagina
    if (itemsPage < 1 || itemsPage > 10) {
        itemsPage = 10;
    }
    if (page < 1) {
        page = 1;
    }
    const total: number = countElements(items);
    const pages: number = Math.ceil(total / itemsPage);
    return {
        page,
        skip: (page - 1) * itemsPage,
        to: ((page - 1) * itemsPage) + itemsPage,
        itemsPage,
        total,
        pages
    };
}

function filterForCategory(characters: Character[], category?: string | null): Character[] {
    if (!category) return characters;

    let charactersFiltrados: Character[] = [];
    characters.forEach(c => {
        if (category.toLowerCase() === c.category.toLowerCase()) charactersFiltrados.push(c);
    });
    return charactersFiltrados;
}

function filterForSpecies(characters: Character[], species?: string | null): Character[] {
    if (!species) return characters;

    let charactersFiltrados: Character[] = [];
    characters.forEach(c => {
        if (species.toLowerCase() === c.species.toLowerCase()) charactersFiltrados.push(c);
    });
    return charactersFiltrados;
}

function filterForGender(characters: Character[], gender?: string | null): Character[] {
    if (!gender) return characters;

    let charactersFiltrados: Character[] = [];
    characters.forEach(c => {
        if (gender.toLowerCase() === c.gender.toLowerCase()) charactersFiltrados.push(c);
    });
    return charactersFiltrados;
}

function filterForPersonality(characters: Character[], personality?: string | null) {
    if (!personality) return characters;

    let charactersFiltrados: Character[] = [];
    characters.forEach(c => {
        if (personality.toLowerCase() === c.personality.toLowerCase()) charactersFiltrados.push(c);
    });
    return charactersFiltrados;
}

function filterForDescription(characters: Character[], description?: string | null): Character[] {
    if (!description) return characters;

    let charactersFiltrados: Character[] = [];
    characters.forEach(c => {
        if (c.description.toLowerCase().includes(description.toLowerCase())) charactersFiltrados.push(c);
    });
    return charactersFiltrados;
}

function filterForPagination({ page, itemsPage: itemsPageCount }: any, characters: Character[]): PaginationResult {
    const { skip, to, page: pageSelect, itemsPage, total, pages } = pagination(page, itemsPageCount, characters);
    return {
        pagination: {
            page: pageSelect,
            itemsPage,
            total,
            pages
        },
        characters: characters.slice(skip, to)
    };
}

function charactersFilters(characters: Character[], filters: Filters = {}): PaginationResult {
    let charactersFiltrados: Character[] = characters;
    const {
        category,
        species,
        gender,
        personality,
        description,
        page = '1',
        items = '10',
    } = filters;

    charactersFiltrados = filterForCategory(charactersFiltrados, category);
    charactersFiltrados = filterForSpecies(charactersFiltrados, species);
    charactersFiltrados = filterForGender(charactersFiltrados, gender);
    charactersFiltrados = filterForPersonality(charactersFiltrados, personality);
    charactersFiltrados = filterForDescription(charactersFiltrados, description);
    const paginate: PaginationResult = filterForPagination({ page: parseInt(page || '1'), items: parseInt(items || '10') }, charactersFiltrados);

    return paginate;
}

export default charactersFilters;
