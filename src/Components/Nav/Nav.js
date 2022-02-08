import { useState } from 'react';
import NavResponsive from './NavResponsive';
import './styles.css';

export default function Nav() {

    const [topBar, setTopBar] = useState(true);

    const showTopbar = () => setTopBar(!topBar);

    return(        
        <>
            <div className='navContainer'>
                <div className='logoAndSections'>
                    <h1 className='logoNav'>LinkChar</h1>
                    <ul className='sectionsNav'>
                        <li>Movies</li>
                        <li>TV shows</li>
                        <li>Animations</li>
                        <li>Plans</li>
                    </ul>
                </div>
                <ul className='sectionTwo'>
                    <div className='searchBox'>
                        <input className='searchInput' placeholder='Search movie or tv show...' type='text' />
                        <li className='searchNav'>
                            <img src='./search.png' alt=''/>
                        </li>
                    </div>
                    <li>
                        <div className='ellipseNav'></div>
                    </li>
                    <li>
                        <div className='circles'>
                            <div className='divCircle'>
                                <img src='./circle.png' alt=''/>
                                <img src='./circle.png' alt=''/>
                            </div>
                            <div className='divCircle'>
                                <img src='./circle.png' alt=''/>
                                <img src='./circle.png' alt=''/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='userArrow'>
                            <div className='userOptions' onClick={showTopbar}>
                                <img src='./user.png' alt=''/>
                                <img src='./arrowBottom.png' alt=''/>
                            </div>
    
                            <div className={topBar ? 'accountNav' : 'accountNav active'}>
                                <img src='./user.png' alt=''/>
                                <p>Account</p>
                                <p>Help</p>
                                <p>Logout</p>
                            </div>
                        </div>
                    </li>
    
                </ul>
            </div>
            <NavResponsive />
        </>
    )
}