function verifyCharacterObject(character: Character): void {
    // Verificamos que el personaje tenga todas las propiedades
    expect(character).toHaveProperty('id')
    expect(character).toHaveProperty('name')
    expect(character).toHaveProperty('description')
    expect(character).toHaveProperty('category')
    expect(character).toHaveProperty('species')
    expect(character).toHaveProperty('gender')
    expect(character).toHaveProperty('personality')
    expect(character).toHaveProperty('image')

    // Verificamos que todas las propiedades del personaje sean del tipo correcto
    expect(typeof character.id).toBe('number')
    expect(typeof character.name).toBe('string')
    expect(typeof character.description).toBe('string')
    expect(typeof character.category).toBe('string')
    expect(typeof character.species).toBe('string')
    expect(typeof character.gender).toBe('string')
    expect(typeof character.personality).toBe('string')
    expect(typeof character.image).toBe('string')
}

function verifyPaginationObject(pagination: Pagination): void {
    expect(pagination).toBeInstanceOf(Object)// verificamos que sea un objeto

    expect(pagination).toHaveProperty('page')
    expect(pagination).toHaveProperty('itemsPage')
    expect(pagination).toHaveProperty('total')
    expect(pagination).toHaveProperty('pages')

    expect(typeof pagination.page).toBe('number')
    expect(typeof pagination.itemsPage).toBe('number')
    expect(typeof pagination.total).toBe('number')
    expect(typeof pagination.pages).toBe('number')
}

export {
    verifyCharacterObject,
    verifyPaginationObject
}