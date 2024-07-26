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

function charactersFilters(filters, characters) {
    let charactersFiltrados = characters;
    charactersFiltrados = filterForCategory(filters.category, charactersFiltrados);
    charactersFiltrados = filterForSpecies(filters.species, charactersFiltrados);
    charactersFiltrados = filterForGender(filters.gender, charactersFiltrados);
    charactersFiltrados = filterForPersonality(filters.personality, charactersFiltrados);
    charactersFiltrados = filterForDescription(filters.description, charactersFiltrados);

    return charactersFiltrados;
}

export default charactersFilters;
