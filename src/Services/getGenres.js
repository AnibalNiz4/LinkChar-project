const apiKey = 'd83df78bddd5d4553fbf5d34015d74bb';

export default function getGenres() {
    return (fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(res => res.json())
    .then(response => {
        const data = response.genres;
        const genres = data.map(mov => {
            const {id, name} = mov
            return {id, name}
        });
        return genres;
    }))
}