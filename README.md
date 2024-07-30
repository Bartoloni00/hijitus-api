# Hijitus-API

## Objetivo de la API

Dada la gran popularidad entre los desarrolladores front-end de las APIs de "Rick and Morty", "PokeAPI", "Dragon Ball API", etc., pensé que sería divertido tener una versión argentina. Por eso, elegí al primer superhéroe animado argentino para desarrollarla.

## Lenguaje

Esta API está construida en JavaScript utilizando el entorno de Node.js con su sistema de módulos y el framework Express.js, siguiendo la arquitectura MVC.

### Base de datos

Actualmente, no existe la necesidad de crear una base de datos, y un archivo JSON es suficiente para administrarla. En próximas versiones, es muy probable que se porte a MongoDB.

### Librerías

- **cors**: Para el manejo de los CORS.
- **nodemon**: dependencia de desarrollo para manejar el reinicio de la api al modificar codigo.

# Instalacion

1. Clona este repositorio:
``` Bash
git clone https://github.com/Bartoloni00/hijitus-api.git
```
2. Navega al directorio del proyecto:
``` Bash
cd hijitus-api
```
3. Instala las dependencias:
``` Bash 
npm install
```

4. Inicia el proyecto:
``` Bash 
npm run dev
```

# Uso de la API

## Ruta raiz de la api
llamando a la ruta raiz de la api encontraremos este mismo readme el cual incluye toda la documentacion

```bash
http://localhost:3333
```

##  Obtener todos los personajes de la serie de Hijitus.

Realiza una peticion por **GET** a la siguiente URL:

```bash
http://localhost:3333/characters
```

### Paginacion
Los personajes vienen dividos por paginas actualmente, por defecto vienen 10 personajes en 3 paginas diferentes, de la siguiente manera podras modificar la pagina:
```bash
http://localhost:3333/characters?page=2
```

Y esta es la forma en la que podras modificar la cantidad de personajes que habra por pagina (default = 10)
```bash
http://localhost:3333/characters?items=2
```

### Filtros
> [!TIP]
> Los filtros pueden ser concatenados en un mismo query string.

#### Filtrar por categoria:
``` bash
http://localhost:3333/characters?category=secundario
```
``` bash
http://localhost:3333/characters?category=protagonista
```
``` bash
http://localhost:3333/characters?category=antagonista
```
``` bash
http://localhost:3333/characters?category=episodico
```

#### Filtrar por especie:

``` bash
http://localhost:3333/characters?species=robot
```
``` bash
http://localhost:3333/characters?species=humano
```
``` bash
http://localhost:3333/characters?species=perro
```
``` bash
http://localhost:3333/characters?species=humano
```
``` bash
http://localhost:3333/characters?species=mounstruo
```
``` bash
http://localhost:3333/characters?species=canguro
```
``` bash
http://localhost:3333/characters?species=pajaro
```
``` bash
http://localhost:3333/characters?species=dragon
```
``` bash
http://localhost:3333/characters?species=Pingüino
```
``` bash
http://localhost:3333/characters?species=Búho
```

#### Filtrar por personalidad:

``` bash
http://localhost:3333/characters?personality=neutral
```
``` bash
http://localhost:3333/characters?personality=bueno
```
``` bash
http://localhost:3333/characters?personality=malo
```

#### Filtrar por genero:

``` bash
http://localhost:3333/characters?personality=femenino
```
``` bash
http://localhost:3333/characters?personality=masculino
```
``` bash
http://localhost:3333/characters?personality=N/A
```

#### Filtrar por descripcion:
Buscar por cualquier frase o palabra que pueda estar incluida en la descripcion.
``` bash
http://localhost:3333/characters?description=amigo%20de%20hijitus
```

## obtener un personaje en concreto de la serie.

Realiza una peticion por **GET** a la siguiente URL:

```bash
http://localhost:3333/characters/{numeroId}
```

> [!NOTE]  
> Los id de los personajes actualmente van del 1 al 28.

### Filtros

## obtener un personaje aleatorio de la serie.

Realiza una peticion por **GET** a la siguiente URL:

```bash
http://localhost:3333/characters/random
```

# Contribuciones

Si deseas contribuir a este proyecto, por favor, abre un issue o realiza un pull request. ¡Toda ayuda es bienvenida!

# Licencia
Este proyecto está bajo la Licencia MIT.