import ContinueWatching from '../ContinueWatching/ContinueWatching';
import CoverPage from '../CoverPage/CoverPage';
import PopularMovies from '../PopularMovies/PopularMovies';
import './styles.css';

export default function Section() {

    return(
        <div className='sectionContainer'>
            <CoverPage />
            <ContinueWatching />
            <PopularMovies />
        </div>
    )
}