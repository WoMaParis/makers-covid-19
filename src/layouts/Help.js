import React, { Fragment } from 'react'
import Iframe from 'react-iframe'
import Button from '../components/Button.js'
import './Help.css'

const Help = (props) => (
    <Fragment>

        <section className={'Help__Materials'}>
            <div className={"Section"}>
                <h2 className={"Section__Title"}>
                    Faire un don au collectif.
                </h2>
                <div className={"Section__Text"}>
                    Nous avons besoin de <strong>matieres premeires</strong>, pour continuer la production :
                </div>
                <ul className={"Section__List"}>
                    <li>Filament plastique PETG 1,75 /2,85 PLA 1,75 / 2,85</li>
                    <li>Rouleaux 100% coton</li>
                    <li>Feuilles plastique PP O,8 mm / PP Crystal / Rhodoïd / PVC 200 microns / PET 0,7mm</li>
                    <li>Elastiques, Elastiques de couture, Rivets plastiques</li>
                </ul>
                <div className={"Section__Action"}>
                    <Button>
                        <a href="mailto://hello@fabicty.paris">
                            Contacter nous directement à hello@fabcity.paris !
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