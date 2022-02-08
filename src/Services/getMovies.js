const apiKey = 'd83df78bddd5d4553fbf5d34015d74bb';

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