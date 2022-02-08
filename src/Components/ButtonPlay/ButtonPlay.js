import './styles.css';

export default function ButtonPlay({ arrow }) {
    
    return(
        <div className="buttonPlay">
            <div className={arrow === 'left' ? 'triangleLeft' : 'triangleRight'} ></div>
        </div>
    )
}