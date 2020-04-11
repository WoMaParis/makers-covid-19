import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';


const Menu = (props) => {
    return(
        <nav className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Menu`}>
            <Link to="/" className={"Menu--Home"}>
                MakersCovid.paris
            </Link>
            <Link to="/ask" className={"Menu--Ask"}>
                Demander
            </Link>
            <Link to="/fab" className={"Menu--Fab"}>
                Fabriquer
            </Link>
            <Link to="/help" className={"Menu--Help"}>
                Aider
            </Link>
            <Link to="/about" className={"Menu--About"}>
                À propos
            </Link>
        </nav>

    )
}


export default Menu;