# LinkChar project!! 😃
---

**Este desafío consiste en consumir la api de [themoviedb.org](https://www.themoviedb.org/) y realizar la portada principal de una página web donde visualizar distintas películas.**

### Pasos que realicé para conseguirlo 👀
* Visualizar el diseño ofrecido.
* Crear cuenta en **themoviedb**.
* Empezar el proyecto en create-react-app.
* Dividir bien las secciones y componentes para organizar las tareas.
* **Manos a la obra** 💻.

---

#### Fetch para consumir la API.
Creé un componente llamado "getMovies.js", donde utilicé un **fetch** para consumir la API y retornar los valores que necesitaba para trabajar.

```javascript
export default function getMovies(data, pag = 1){
    const api = `https://api.themoviedb.org/3/movie/${data}?api_key=${apiKey}&language=en-US&page=${pag}`

    return  fetch(api)
        .then(res => res.json())
        .then(response => {
            const data = response.results;
            const movies = data.map(mov => {
                const { overview, vote_average, id, original_title, backdrop_path, genre_ids, poster_path } = mov;
                return { overview, vote_average, id, original_title, backdrop_path, genre_ids, poster_path };
            });
            return movies;
        });
}
```

#### Creación de Nav.
Una vez obtenidos los datos, decidí crear el **Nav** para poder indicar la sección en la que se está posicionada, dándole sus estilos y algunas pequeñas funcionalidades con el *hover* para darle vida 😎.

![Nav](./public/Nav.png)

#### Sección de New Trailers
Completado el Nav, decidí crear la sección de Trailers, utilizando los datos retornados por el *fetch* a la API, y creando componentes con las imágenes de las nuevas películas.

![newTrailers](/public/newTrailers.png)

#### Sección Favourite Genres
También dentro de la misma sección pero más abajo, creé un componente, con un contenedor donde agregar los géneros favoritos de las películas y poder filtrarlos.

![FavouriteGenres](/public/FavouriteGenres.png)

#### Sección de Movies
Ya para terminar, creé las secciones y componentes de cada una de las películas.Las películas al pasar el cursor se les puede visualizar el hover, donde indica el **overview** de cada una de ellas.

1. Portada general que carga aleatoriamente.
2. Películas para continuar mirando.
3. Las películas populares de 2022.

![Movies](/public/Movies.png)

#### Responsive Design
Para concluir la página, procedí por adaptar todo a dispositivos móviles para que se pueda ver comodamente sea en PC como en móviles.

---
Espero les guste, pueden ver el resultado final en: https://linkchar-project.vercel.app/

😁👀
