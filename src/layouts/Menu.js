import React, {useState} from 'react';
import Button from '../components/Button';
import {Link, withRouter} from 'react-router-dom';
import './Menu.css';


const Menu = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const currentRoute = props.location.pathname.split('/')[1] === '' ? 'home' : props.location.pathname.split('/')[1];
    
    return(
        <nav className={`${typeof (props.className) !== 'undefined' ? props.className : ''} ${menuOpen ? 'Menu--Open' : ''} Menu`}>
            <div to="/" className={`Menu__Link Link`}>
                <h1 className="Link__Title Link--Desktop">
                    <Link to="/" onClick={() => { setMenuOpen(false) }}>
                        MakersCovid.paris
                    </Link>
                </h1>
                <h1 className="Link__Title Link--Mobile">
                    <Link to="/" onClick={() => { setMenuOpen(false) }}>
                        MxC.paris
                    </Link>
                </h1>
                <div className="Link__Description">
                    Makerscovid.paris fabrique du materiel sanitaire d’urgence pour l’île de france. 
                </div>
                    
                <Button className="Link__CTA Button--Inverted">
                    <Link to="/about" onClick={() => { setMenuOpen(false) }} >
                        Nous contacter !
                    </Link>
                </Button>
            </div>
            <Link to="/ask" onClick={() => { setMenuOpen(false) }} className={`Menu__Link Link ${currentRoute === 'ask' ? 'Menu__Link--active':''}`}>
                <h2 className="Link__Title">Demander</h2>
                <p className="Link__Description">
                    Vous avez des besoins en matériel sanitaire, vous voulez effectuer une commande, ou vous cherchez plus d’informations sur le matériel ?
                </p>
            </Link>
            <Link to="/fab" onClick={() => { setMenuOpen(false) }} className={`Menu__Link Link ${currentRoute === 'fab' ? 'Menu__Link--active':''}`}>
                <h2 className="Link__Title">Fabriquer</h2>
                <p className="Link__Description">
                    Vous cherchez à participer à la fabrication de matériel sanitaire à l’aide de vos compétences ou de vos outils ?
                </p>
            </Link>
            <Link to="/help" onClick={() => { setMenuOpen(false) }} className={`Menu__Link Link ${currentRoute === 'help' ? 'Menu__Link--active':''}`}>
                <h2 className="Link__Title">Donner</h2>
                <p className="Link__Description">
                    Vous voulez aider le collectif dans ses activités, que ce soit financièrement ou en faisant un don de matériaux ?
                </p>
            </Link>
            <Link to="/about" onClick={() => { setMenuOpen(false) }} className={`Menu__Link Link ${currentRoute === 'about' ? 'Menu__Link--active' : ''}`}>
                <h2 className="Link__Title">À propos</h2>
                <p className="Link__Description">
                    Vous souhaitez plus d’informations sur le collectif ou nous contacter ?                 </p>
            </Link>
            <div className={`MobileToggle`} onClick={() => { setMenuOpen(!menuOpen) }}>
                <div className={`MobileToggle__Toggle`} ></div>
            </div>
        </nav>

    )
}


export default withRouter(Menu);