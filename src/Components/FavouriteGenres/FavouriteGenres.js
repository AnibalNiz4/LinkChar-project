import './styles.css'

export default function FavouriteGenres() {

    return(
        <div className='favouritesContainer'>
            <h2>Favourite Genres</h2>
            <div className='genres'>
                <p>Action</p>
                <p>Western</p>
                <p>Adventures</p>
                <p>Drama</p>
                <p>Sci-fi</p>
            </div>
            <div className='addGenres'>
                <div><img alt='' src='./cruce.png' /></div>
                <p>Add your favourite genres</p>
            </div>
            <div className='addFavouritesGenres'>
                <p>Crime</p>
                <p>Comedy</p>
                <p>Thriller</p>
            </div>
        </div>
    )
}