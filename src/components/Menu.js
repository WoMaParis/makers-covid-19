import React from 'react';
import Button from './Button';
import {Link, withRouter} from 'react-router-dom';
import './Menu.css';


const Menu = (props) => {
    const currentRoute = props.location.pathname.split('/')[1] === '' ? 'home' : props.location.pathname.split('/')[1];
    
    return(
        <nav className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Menu`}>
            <div to="/" className={`Menu__Link Link`}>
                <h1 className="Link__Title">
                    <Link to="/">
                    MakersCovid.paris
                    </Link>
                </h1>
                <p className="Link__Description">
                    MakersCovid.paris apporte du matériel sanitaire d'urgence pour l'Ile-de-France.
                </p>
                    
                <Button className="Link__CTA Button--Inverted">
                    <Link to="/about" >
                        Nous contacter !
                    </Link>
                </Button>
            </div>
            <Link to="/ask" className={`Menu__Link Link ${currentRoute === 'ask' ? 'Menu__Link--active':''}`}>
                <h2 className="Link__Title">Demander</h2>
                <p className="Link__Description">
                    Vous avez des besoins en matériel sanitaire, ou vous chercher plus d'informations sur le matériel, vos commandes.
                </p>
            </Link>
            <Link to="/fab" className={`Menu__Link Link ${currentRoute === 'fab' ? 'Menu__Link--active':''}`}>
                <h2 className="Link__Title">Fabriquer</h2>
                <p className="Link__Description">
                    Vous cherchez à participer à la fabrication de matériel sanitaires à l'aide vos compétences et outils.
                </p>
            </Link>
            <Link to="/help" className={`Menu__Link Link ${currentRoute === 'help' ? 'Menu__Link--active':''}`}>
                <h2 className="Link__Title">Aider</h2>
                <p className="Link__Description">
                    Vous voulez aider le collectifs dans ses activités, que ce soit financièrement ou à l'aide de vos ressources.
                </p>
            </Link>
            <Link to="/about" className={`Menu__Link Link ${currentRoute === 'about' ? 'Menu__Link--active':''}`}>
                <h2 className="Link__Title">À propos</h2>
                <p className="Link__Description">
                    Vous souhaitez plus d'informations sur le collectif ou nous contacter.
                </p>
            </Link>
        </nav>

    )
}


export default withRouter(Menu);