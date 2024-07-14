# hijitus-api

## Objetivo de la API

Dada la gran popularidad entre los desarrolladores front-end de las APIs de "Rick and Morty", "PokeAPI", "Dragon Ball API", etc., pensé que sería divertido tener una versión argentina. Por eso, elegí al primer superhéroe animado argentino para desarrollarla.

## Lenguaje

Esta API está construida en JavaScript utilizando el entorno de Node.js con su sistema de módulos y el framework Express.js, siguiendo la arquitectura MVC.

### Base de datos

Actualmente, no existe la necesidad de crear una base de datos, y un archivo JSON es suficiente para administrarla. En próximas versiones, es muy probable que se porte a MongoDB.

### Librerías

- **cors**: Para el manejo de los CORS.

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

Para obtener todos los personajes de la serie de Hijitus, realiza una llamada **GET** a la siguiente URL:

```bash
http://localhost:3333/characters
```
## Filtros

# Contribuciones

Si deseas contribuir a este proyecto, por favor, abre un issue o realiza un pull request. ¡Toda ayuda es bienvenida!

# Licencia
Este proyecto está bajo la Licencia MIT.