import "./navResponsive.css";
import { useState } from "react";

export default function NavResponsive() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

  const [topBar, setTopBar] = useState(true);

  const showTopbar = () => setTopBar(!topBar);

  return (
    <>
        <div className="navResponsive">
            <h3 className='logoNavResponsive'>LinkChar</h3>
            <div
                onClick={showTopbar}
                className={topBar ? "hamburgerNav" : "hamburgerNav activeHamburger"}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div className={topBar ? "navRes_Container" : "navRes_Container activeNav"}>
            <ul className="ulNavResponsive">
                <li>Movies</li>
                <li>TV shows</li>
                <li>Animations</li>
                <li>Plans</li>
            </ul>
            <div className="profileResponsive">
                <input className='inputNavResponsive' placeholder='Search movie or tv show...' type='text' />
                <p>Profile</p>
            </div>
        </div>
    </>
  );
}