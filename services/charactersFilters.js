export function filterForCategory(category, characters) {
    if (category) {
        let charactersFiltrades = []
        characters.forEach(c => {
            if (category.toLowerCase() == c.category.toLowerCase()) {
            charactersFiltrades.push(c)
            }
        });
        return charactersFiltrades
    }
    return characters
}
export function filterForSpecies(species, characters) {
    if (species) {
        let charactersFiltrades = []
        characters.forEach(c => {
            if (species.toLowerCase() == c.species.toLowerCase()) {
            charactersFiltrades.push(c)
            }
        });
        return charactersFiltrades
    }
    return characters
}
export function filterForGender(gender, characters) {
    if (gender) {
        let charactersFiltrades = []
        characters.forEach(c => {
            if (gender.toLowerCase() == c.gender.toLowerCase()) {
            charactersFiltrades.push(c)
            }
        });
        return charactersFiltrades
    }
    return characters
}
export function filterForPersonality(personality, characters) {
    if (personality) {
        let charactersFiltrades = []
        characters.forEach(c => {
            if (personality.toLowerCase() == c.personality.toLowerCase()) {
            charactersFiltrades.push(c)
            }
        });
        return charactersFiltrades
    }
    return characters
}
// description
// una funcion que abarque todos los filtros