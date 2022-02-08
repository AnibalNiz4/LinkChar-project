import ButtonPlay from '../ButtonPlay/ButtonPlay';
import MovieCard from '../MovieCard/MovieCard';
import './styles.css';
import { useEffect, useState } from 'react';
import getMovies from '../../Services/getMovies';
import FavouriteGenres from '../FavouriteGenres/FavouriteGenres';

export default function Trailers(){

    const [movies, setMovies] = useState([]);
    const [leftBar, setLeftBar] = useState(true);
    const showLeftbar = () => setLeftBar(!leftBar);
  
    useEffect(() => {
      getMovies('upcoming', 1).then((movie) => setMovies(movie));
    }, []);

    return(
        <div className={leftBar ? 'trailersContainer' : 'trailersContainer active'}>
            <div className='triangleTrailers' onClick={showLeftbar}>
                <ButtonPlay arrow={leftBar ? '' : 'left'} />
            </div>

            <div className={leftBar ? 'trailers' : 'trailers active displayNone'}>
                <div className='trailersText'>
                    <h2>New Trailers</h2>
                    <div className='Sort_Today'>
                        <p className='sortP'>Sort By</p>
                        <div className='todayDiv'>
                            <p>
                                Today
                            </p>
                            <div className='arrowsToday'>
                                <img alt='' src='./arrowTodayTop.png'/>
                                <img alt='' src='./arrowTodayBottom.png'/>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className='moviesCardContainer'>
                    {
                        movies.length === 20 ? 
                            <div className='moviesCardContainerWithin'>
                                <MovieCard
                                    imgMovie={movies[5].backdrop_path}
                                    title={movies[5].original_title}
                                    vote_average={movies[5].vote_average}
                                    overview={movies[5].overview}
                                />
                                <MovieCard
                                    imgMovie={movies[2].backdrop_path}
                                    title={movies[2].original_title}
                                    vote_average={movies[2].vote_average}
                                    overview={movies[2].overview}
                                />
                            </div>
                            :
                            null
                    }
                </div>
                
            </div>

            <div className={leftBar ? 'favouriteDiv' : 'favouriteDiv active displayNone'}>
                <FavouriteGenres/>
            </div>

        </div>
    )
}