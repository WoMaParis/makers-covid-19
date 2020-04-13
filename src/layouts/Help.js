import React, { Fragment } from 'react'
import Iframe from 'react-iframe'
import Button from '../components/Button.js'
import './Help.css'

const Help = (props) => (
    <Fragment>

    <section className={'Help__Information'}>
            <div className={"Section"}>
                <h2 className={"Section__Title"}>
                    Vous voulez faire un don ? 
                </h2>
                <div className={"Section__Text"}>
                    Nous mettons tout cela en oeuvre <strong>gratuitement et bénévolement</strong>. Si vous voulez contribuer à l'effort, nous avons mis en place une cagnotte sur helloasso. Les sommes récupérées sont et seront utilisées pour rembourser les achats de matières premières et autres dépenses de la communauté. <strong>Il n'y aucun but lucratif à cette démarche</strong>. 
                </div>
            </div>
            <div className={"Section"}>
                <h2 className={"Section__Title"}>
                    Vous avez accès à des matières premières ?
                </h2>
                <div className={"Section__Text"}>
                    Nous avons besoin de <strong>matières premières</strong>, pour continuer la fabrication. Pour la production des visières, des masques et autres matériels nous cherchons :
                </div>
                <ul className={"Section__List"}>
                    <li>De filaments plastique PETG 1,75mm / 2,85mm</li>
                    <li>De filaments plastique PLA 1,75 / 2,85 </li>
                    <li>De feuilles de PolyPropylène 0,8 mm, de PET 0,7mm</li>
                    <li>De feuilles de PolyPropylène Crystal 0,8 mm, de PVC 200um, de Rhodoïd A3 / A4</li>
                    <li>De rouleaux 100% coton</li>
                    <li>De divers éléments : Elastiques de bureau, Elastiques de couture, Rivets plastiques</li>
                </ul>
                <div className={"Section__Action Section__Action--CTA"}>
                    <Button>
                        <a href="mailto://sarah@fabicty.paris">
                            Contactez Sarah à sarah@fabcity.paris !
                        </a>
                    </Button>
                </div>
            </div>
        </section>
        <Iframe 
        id="haWidget" 
        className={'Help__HelloAsso'}
        allowtransparency="true" 
        scrolling="auto" 
        src="https://www.helloasso.com/associations/fab-city-grand-paris/formulaires/1/widget" 
        />

    </Fragment>
)

export default Help