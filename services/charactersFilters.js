function filterForCategory(category, characters) {
    if (!category) return characters

    let charactersFiltrades = []
    characters.forEach(c => {
        if (category.toLowerCase() == c.category.toLowerCase()) charactersFiltrades.push(c)
    })
    return charactersFiltrades
}

function filterForSpecies(species, characters) {
    if (!species) return characters

    let charactersFiltrades = []
    characters.forEach(c => {
        if (species.toLowerCase() == c.species.toLowerCase()) charactersFiltrades.push(c)
    })
    return charactersFiltrades
}

function filterForGender(gender, characters) {
    if (!gender)  return characters

    let charactersFiltrades = []
    characters.forEach(c => {
        if (gender.toLowerCase() == c.gender.toLowerCase()) charactersFiltrades.push(c)
    })
    return charactersFiltrades
}

function filterForPersonality(personality, characters) {
    if (!personality) return characters

    let charactersFiltrades = []
    characters.forEach(c => {
        if (personality.toLowerCase() == c.personality.toLowerCase()) charactersFiltrades.push(c)
    })
    return charactersFiltrades
}

function filterForDescription(description, characters) {
    if (!description) return characters

    let charactersFiltrades = []
    characters.forEach(c => {
        if (c.description.toLowerCase().includes(description.toLowerCase())) charactersFiltrades.push(c)
    })
    return charactersFiltrades ?? characters
}

export default charactersFilters(filters,characters)
{
    characters = filterForCategory(filters.category, characters)
    characters = filterForSpecies(filters.species, characters)
    characters = filterForGender(filters.gender, characters)
    characters = filterForPersonality(filters.personality, characters)
    characters = filterForDescription(filters.description, characters)

    return characters
}