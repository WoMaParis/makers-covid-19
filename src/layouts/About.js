import React, { Fragment } from 'react'
import Collectif from '../components/Collectif.js'
import Volunteers from '../components/Volunteers.js'
import './About.css'

const About = (props) => (

    <Fragment>

        <section className={'Team'}>

            <div className={"Section"}>
                <h2 className={"Section__Title"}>
                    À propos du collectif Makers x Covid-19 Paris
                </h2>
                <div className={"Section__Text"}>
                    Le collectif <strong>Makers x Covid Paris</strong> fait partie des multiples initiatives qui sont nées sur le territoire pour pallier le manque de materiel sanitaire.
                    Le collectif s'est construit autour des initiatives portées par <a className={'Simple__Link '} href={'http://volumesparis.org/'} target="_blank" rel="noopener noreferrer">Volumes</a>, <a className={'Simple__Link'} href={'https://www.electrolab.fr/'} target="_blank" rel="noopener noreferrer">l'Electrolab</a> et l'<a className={'Simple__Link '} href={'https://www.atelierdesamis.fr/'} target="_blank" rel="noopener noreferrer">Atelier des Amis</a>. Très vite, les autres labs, mais aussi des partenaires publics et des fournisseurs se sont ralliés au mouvement.<br/>
                    <strong>L'objectif est de produire de manière organisée un maximum de matériel pour les personnes les plus exposées.</strong>
                </div>
            </div>

            <div className={"Section Section--Emphasis"}>
                <h3 className={"Section__Title"}>
                    Contacter les référent.e.s
                </h3>
                <ul className={"Section__List"}>
                    <li><strong>Coordination Labs et @Maison: </strong><a className={'Simple__Link Simple__Link--Inverted'} href={'mailto:michael@volumesparis.org'}>@Michael</a> et <a className={'Simple__Link Simple__Link--Inverted'} href={'mailto:vincentguimas@gmail.com'}>@Vincent</a> </li>
                    <li><strong>Production laser & 3d : </strong><a className={'Simple__Link Simple__Link--Inverted'} href={'mailto:corentin@volumesparis.org'}>@Corentin</a> et <a className={'Simple__Link Simple__Link--Inverted'} href={'mailto:flo@atelierdesamis.fr'}>@Florence</a></li>
                    <li><strong>Production textile : </strong><a className={'Simple__Link Simple__Link--Inverted'} href={'mailto:afournier@simplon.co'}>@Antonin</a> et <a className={'Simple__Link Simple__Link--Inverted'} href={'mailto:virginie@villettemakerz.com'}>@Virginie</a></li>
                    <li><strong>Fournitures et fournisseurs : </strong><a className={'Simple__Link Simple__Link--Inverted'} href={'mailto:sarah@fabcity.paris'}>@Sarah</a></li>
                    <li><strong>Financement et partenariats : </strong><a className={'Simple__Link Simple__Link--Inverted'} href={'mailto:minh@fabcity.paris'}>@Minh</a> et <a className={'Simple__Link Simple__Link--Inverted'} href={'mailto:'}>@Andy</a></li>
                    <li><strong>Site & Communication : </strong><a className={'Simple__Link Simple__Link--Inverted'} href={'mailto:quentin@woma.fr'}>@Quentin</a> et <a className={'Simple__Link Simple__Link--Inverted'} href={'mailto:elefloch@simplon.co'}>@Élaine</a></li>
                </ul>
            </div>

            <div className={"Section"}>
                <h3 className={"Section__Title"}>
                    Les autres initiatives
                </h3>
                <div className={"Section__Text"}>
                    Coordination des projets
                </div>
                <ul className={"Section__List"}>
                    <li><a className="Simple__Link" href="https://covid3d.org" target="_blank" rel="noopener noreferrer">
                            Plateforme nationale de l’AP-HP
                    </a></li>
                    <li><a className="Simple__Link" href="https://covid-initiatives.org/" target="_blank" rel="noopener noreferrer">
                        Plateformes de recensement des initiatives
                    </a></li>
                    <li><a className="Simple__Link" href="https://app.jogl.io/project/118" target="_blank" rel="noopener noreferrer">
                        JOGL - Open Covid Initiatives
                    </a></li>
                    <li><a className="Simple__Link" href="https://mailchi.mp/cce2c1470d1d/tiers-lieux-et-makers-face-au-covid-19" target="_blank" rel="noopener noreferrer">
                        Liens vers d’autres initiatives et réseaux - «France Tiers Lieux»
                    </a></li>
                </ul>
                <div className={"Section__Text"}>
                    Actions locales de fabrication
                </div>
                <ul className={"Section__List"}>
                    <li><a className="Simple__Link" href="https://covid3d.fr" target="_blank" rel="noopener noreferrer">
                        Plateforme nationale de mise en relations
                    </a></li>
                    <li><a className="Simple__Link" href="https://visieresolidaire.org/fr/" target="_blank" rel="noopener noreferrer">
                        Les Visières Solidaires
                    </a></li>
                    <li><a className="Simple__Link" href="http://3d4care.org/" target="_blank" rel="noopener noreferrer">
                        3d4care
                    </a></li>
                    <li><a className="Simple__Link" href="https://www.google.com/maps/d/viewer?mid=1RMGwwBX6djxep-8XqWhAWtTWr30tNECE&ll=48.24622975411402%2C0.5458348938673225&z=7" target="_blank" rel="noopener noreferrer">
                        Cartographie des groupes Facebook de makers actifs en France
                    </a></li>
                    <li><a className="Simple__Link" href="http://www.fablab.fr/entre-fablabs/article/nouveau-reseau-des-referents-regionaux-du-reseau-francais-des-fablabs" target="_blank" rel="noopener noreferrer">
                        Cartographie des référents RFF par régions
                    </a></li>
                </ul>
                <div className={"Section__Text"}>
                    Coordination des projets
                </div>
                <ul className={"Section__List"}>
                    <li><a className="Simple__Link" href="https://usbeketrica.com/article/pourquoi-le-covid-19-va-aussi-propager-le-mouvement-maker" target="_blank" rel="noopener noreferrer">Usbek&Rica - Pourquoi le Covid19 va (aussi) propager le mouvement maker.
                    </a></li>
                    <li><a className="Simple__Link" href="https://www.makery.info/2020/04/09/covid-19-la-mobilisation-des-makers-francais-est-sans-precedent-il-serait-temps-que-letat-sen-rende-compte/" target="_blank" rel="noopener noreferrer">Makery - La mobilisation des makers est sans précédent
                    </a></li>
                    <li><a className="Simple__Link" href="https://fablabs-vs-covid.netlify.com/" target="_blank" rel="noopener noreferrer">Thread d’articles sur les initiatives makers x Covid en région
                    </a></li>
                </ul>
            </div>

        </section>
        <section className={'Organisations'}>
            <Volunteers/>
            <Collectif/>
        </section>
    </Fragment >

)

export default About