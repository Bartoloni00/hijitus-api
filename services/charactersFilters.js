export const countElements = (items) => items.length;

export function pagination(
    page = 1,
    itemsPage = 10,
    items
) {
    // Comprobar el numero de items por pagina
    if (itemsPage < 1 || itemsPage > 10) {
        itemsPage = 10;
    }
    if (page < 1) {
        page = 1;
    }
    const total = countElements(items);
    const pages = Math.ceil(total / itemsPage);
    return {
        page,
        skip: (page - 1) * itemsPage,
        to: ((page - 1) * itemsPage) + itemsPage,
        itemsPage,
        total,
        pages
    };
}

function filterForCategory(category, characters) {
    if (!category) return characters;

    let charactersFiltrados = [];
    characters.forEach(c => {
        if (category.toLowerCase() === c.category.toLowerCase()) charactersFiltrados.push(c);
    });
    return charactersFiltrados;
}

function filterForSpecies(species, characters) {
    if (!species) return characters;

    let charactersFiltrados = [];
    characters.forEach(c => {
        if (species.toLowerCase() === c.species.toLowerCase()) charactersFiltrados.push(c);
    });
    return charactersFiltrados;
}

function filterForGender(gender, characters) {
    if (!gender) return characters;

    let charactersFiltrados = [];
    characters.forEach(c => {
        if (gender.toLowerCase() === c.gender.toLowerCase()) charactersFiltrados.push(c);
    });
    return charactersFiltrados;
}

function filterForPersonality(personality, characters) {
    if (!personality) return characters;

    let charactersFiltrados = [];
    characters.forEach(c => {
        if (personality.toLowerCase() === c.personality.toLowerCase()) charactersFiltrados.push(c);
    });
    return charactersFiltrados;
}

function filterForDescription(description, characters) {
    if (!description) return characters;

    let charactersFiltrados = [];
    characters.forEach(c => {
        if (c.description.toLowerCase().includes(description.toLowerCase())) charactersFiltrados.push(c);
    });
    return charactersFiltrados;
}

function filterForPagination({ page, items }, characters) {
    const { skip, to, page: pageSelect, itemsPage, total, pages } = pagination(page, items, characters);
    return {
        pagination: {
            page: pageSelect,
            itemsPage,
            total,
            pages
        },
        characters: characters.slice(skip, to)
    }
}

function charactersFilters(filters, characters) {
    let charactersFiltrados = characters;
    const { category, species, gender, personality, description, page, items } = filters;
    charactersFiltrados = filterForCategory(category, charactersFiltrados);
    charactersFiltrados = filterForSpecies(species, charactersFiltrados);
    charactersFiltrados = filterForGender(gender, charactersFiltrados);
    charactersFiltrados = filterForPersonality(personality, charactersFiltrados);
    charactersFiltrados = filterForDescription(description, charactersFiltrados);
    charactersFiltrados = filterForPagination({ page: parseInt(page || '1'), items: parseInt(items || '10') }, charactersFiltrados);

    return charactersFiltrados;
}

export default charactersFilters;
