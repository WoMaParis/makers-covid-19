import React, { Fragment } from 'react'
import Button from '../components/Button.js'
import Favicon from '../components/Favicon.js'
import { IoLogoGithub } from 'react-icons/io';
import { Helmet } from "react-helmet"
import './Credits.css'

const Credits = (props) => (

<Fragment>

        <Favicon icon={'credits'} />
        <Helmet>
            <title>Informations | Makers d'Ile-de-France contre le Covid-19.</title>
            <meta name="description" content="Les conditions générales, les crédits et les informations sur les responable du site." />
        </Helmet>
        <section className={'Credits__Actions Section Section--Simple'}>
            <div className={'Section'}>
                <h1 className={"Section__Title"}>
                    Informations légales
                </h1>
                <div className={"Section__Text"}>
                    Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez sans réserves les présentes modalités. Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables du présent site internet  <a className={'Simple__Link'} href='https://makerscovid.paris'> makerscovid.paris</a> sont :
                </div>
                <h3 className={"Section__Title"}>
                    Editeur et Developpeur du Site
                </h3>
                <div className={"Section__Text"}>
                    <strong>Quentin Perchais</strong><br />
                    Email : <a className={'Simple__Link'} href='mailto:perchais.quentin@gmail.com'>perchais.quentin@gmail.com</a><br />
                    Site : <a className={'Simple__Link'} href='https://nascis.fr' target="_self" rel="noopener noreferrer">nascis.fr</a>
                </div>
                <h3 className={"Section__Title"}>
                    Hébergement et DNS du Site
                </h3>
                <div className={"Section__Text"}>
                    <strong>Netlify</strong><br />
                    Site : <a className={'Simple__Link'} href='https://www.netlify.com/' target="_self" rel="noopener noreferrer">netlify.com/</a><br />
                    <strong>Cloudflare</strong><br />
                    Site : <a className={'Simple__Link'} href='https://www.cloudflare.com/' target="_self" rel="noopener noreferrer">cloudflare.com/</a>
                </div>
            </div>
            
        </section>
        <section className={'Credits__Actions Section Section--Simple'}>
            <div className={'Section  Section--Bordered'}>
                <h2 className={"Section__Title"}>
                    Crédits et propriété intellectuelle
                </h2>
            </div>
            <div className={'Section'}>
                <h3 className={"Section__Title"}>
                    Icônes et illustrations
                </h3>
                <ul className={"Section__List"}>
                    <li>Sewing Machine par ProSymbols sur <a className={'Simple__Link'} href='https://thenounproject.com/search/?q=sewing%20machine&i=639761' target="_self" rel="noopener noreferrer">
                        the Noun Project
                    </a></li>
                    <li>Laser par <a className={'Simple__Link'} href='mailto:perchais.quentin@gmail.com'>Quentin Perchais</a></li>
                    <li>3D Printer par Cono Studio Milano sur <a className={'Simple__Link'} href='https://thenounproject.com/search/?q=3d%20printer&i=912171' target="_self" rel="noopener noreferrer">
                       the Noun Project
                    </a></li>
                    <li>
                        Volunteer par Kieu Thi Kim Cuong sur <a className={'Simple__Link'} href='https://thenounproject.com/search/?q=volunteers&i=2876612' target="_self" rel="noopener noreferrer">
                            the Noun Project
                    </a></li>
                    <li>
                        Vinyl cutter par <a className={'Simple__Link'} href='mailto:perchais.quentin@gmail.com'>Quentin Perchais</a>
                    </li>
                    <li>
                        Motifs de fond par  <a className={'Simple__Link'} href='mailto:tibolouvet@gmail.com'>Thibaut Louvet</a>
                    </li>
                    <li>
                        Illustrations par  <a className={'Simple__Link'} href='mailto:mari3.b@gmail.com'>Marie Boussard</a>
                    </li>
                </ul>
            </div>
            <div className={'Section Section Section--Bordered'}>
                <h3 className={"Section__Title"}>
                    Crédits photos
                </h3>
                <ul className={"Section__List"}>
                    <li>Photos page d'accueil par <a className={'Simple__Link'} href='https://volumesparis.org/' target="_self" rel="noopener noreferrer">
                        Volumes Coworking
                    </a></li>
                    <li>Photos page d'accueil par <a className={'Simple__Link'} href='https://www.homemakers.fr/' target="_self" rel="noopener noreferrer">
                        HomeMakers
                    </a></li>
                </ul>
            </div>

            <div className={'Section Section Section--Bordered'}>
                <h3 className={"Section__Title"}>
                    Services et Frameworks
                </h3>
                <ul className={"Section__List"}>
                    <li><a className={'Simple__Link'} href='https://create-react-app.dev/' target="_self" rel="noopener noreferrer">
                        CreateReactApp
                    </a></li>
                    <li>Cartographie par <a className={'Simple__Link'} href='https://www.mapbox.com/' target="_self" rel="noopener noreferrer">
                        Mapbox
                    </a></li>
                    <li>Données de cartographie par <a className={'Simple__Link'} href='http://www.openstreetmap.org/about/' target="_self" rel="noopener noreferrer">
                        OpenStreetMap
                    </a></li>
                </ul>
            </div>
            <div className={'Section Section--Emphasis Section--ICenter Section--Horizontal Section--Bordered'}>
                <h3 className={"Section__Title"}>
                    Ce site est open-source
                </h3>
                <Button className={'Section__Action'}>
                    <a href="https://github.com/WoMaParis/makers-covid-19" target="_blank" rel="noopener noreferrer">
                        Voir le code source <IoLogoGithub/>
                </a>
                </Button>
            </div>

        </section>
    
    </Fragment>

)

export default Credits