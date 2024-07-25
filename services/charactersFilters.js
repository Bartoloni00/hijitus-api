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