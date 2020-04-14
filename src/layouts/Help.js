import React, { Fragment } from 'react'
import Iframe from 'react-iframe'
import Button from '../components/Button.js'
import Favicon from '../components/Favicon.js'
import { Helmet } from "react-helmet"
import './Help.css'

const Help = (props) => (
    <Fragment>
        <Favicon icon={'help'}/>

        <Helmet>
            <title>Donner | Makers d'Ile-de-France contre le Covid-19.</title>
            <meta name="description" content="Aider le collectif en faisant un don financier ou en matiére premiere." />
        </Helmet>

        <section className={'Help__Information'}>
            <div className={"Section"}>
                <h2 className={"Section__Title"}>
                    Vous voulez aider ?
                </h2>
                <div className={"Section__Text"}>
                    Nous mettons tout cela en oeuvre <strong>gratuitement et bénévolement</strong>. Si vous voulez contribuer à l'effort, nous avons besoin de matières premières et de sous pour financer nos achats. <strong>Il n'y aucun but lucratif à cette démarche</strong>.
                </div>
            </div>

            <div className={'Section Section--Hoverable Section--Horizontal'}>
                <img className={'Section__Illustration'} alt={'Don financier'} src={'/illustrations/help_financial.png'} />
                <div className={"Section Section--Simple Section--Vertical Section--Center"}>                
                    <h3 className={"Section__Title"}>
                        Faire un don.
                    </h3>
                    <div className={"Section__Text"}>
                        Si vous voulez faire un don, nous avons mis en place une cagnotte sur helloasso. Les sommes récupérées sont et seront utilisées <strong>pour rembourser les achats de matières premières et autres dépenses de la communauté </strong>.
                    </div>
                </div>
            </div>
            <div className={'Section Section--Hoverable Section--Horizontal'}>
                <img className={'Section__Illustration'} alt={'Don materiel'} src={'/illustrations/help_materials.png'} />
                <div className={"Section Section--Simple Section--Vertical Section--Center"}> 
                <h3 className={"Section__Title"}>
                    Proposer des matières premières.
                </h3>
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
                </div>
            </div>
            <div className={"Section Section--CTA"}>
                <h3 className={"Section__Title"}>
                    Contactez Sarah !
                </h3>
                <Button className={"Section__Action"}>
                    <a href="mailto://sarah@fabicty.paris">
                        Envoyer un mail
                    </a>
                </Button>
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