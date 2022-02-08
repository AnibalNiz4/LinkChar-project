import ButtonPlay from '../ButtonPlay/ButtonPlay';
import './styles.css';

export default function MovieCard({imgMovie, title, vote_average, overview}) {

    return(
        <div className='movieCard'>
            <img className='imgMovie' alt='' src={"https://image.tmdb.org/t/p/original/" + imgMovie} />
            <div className='views'>
                <div>
                    <img alt='' src='./eye.png'/>
                </div>
                <p>2.3M</p>
            </div>
            <div className='playTrailer'>
                <ButtonPlay arrow='left'/>
                <div className='movieData'>
                    <h5>{title}</h5>
                    <p>Vote Average: <span>{vote_average}</span></p>
                    <p>3h ago</p>
                </div>
                <div className='duration'>
                    <span></span>
                    <p className='duration_P'>01:29</p>
                </div>
            </div>

            <div className='hoverCard'>
                <h3 className='titleHoverCard'>{title}</h3>
                <p className='voteHoverCard'>{vote_average}</p>
                <p className='overviewHoverCard'>{overview}</p>
            </div>
        </div>
    )
}