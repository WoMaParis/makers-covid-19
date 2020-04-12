import React from 'react'
import Collectif from './Collectif.js'
import Volunteers from './Volunteers.js'
import './About.css'

const About = (props) => (

    <section className={`${typeof (props.className) !== 'undefined' ? props.className : ''} About`}>
            <div className={'Collectif__Info'}>
            <div className={"Informations__Header"}>
                <h2 className={"Header__Title"}>
                    À propos du collectif Makers x Covid-19 Paris.
            </h2>
                    <div className={"Header__Intro"}>
                    Dès le début du confinement et les première pénuries, les initiatives de makers isolés foisonnent sur les réseaux (principalement des groupes facebook et outils collaboratifs comme Slack, Mattermost et Discord déjà utilisés par les communautés.) 
                </div>
            </div>
            <div className={"Informations__Header"}>
                <h3 className={"Header__Title"}>
                    Contacter les référent.e.s
                </h3>
                <ul className={"Header__List"}>
                    <li><strong>Coordination : </strong><a href={'mailto://'}>Michael</a> </li>
                    <li><strong>Production laser & 3d : </strong><a href={'mailto://'}>Corentin</a> et <a href={'mailto://'}>Florence</a></li>
                    <li><strong>Production textile : </strong><a href={'mailto://'}>Antonin</a> et <a href={'mailto://'}>Virginie</a></li>
                    <li><strong>Financement et partenariats : </strong><a href={'mailto://'}>Minh</a> et <a href={'mailto://'}>Andy</a></li>
                    <li><strong>Site & Communication : </strong><a href={'mailto://'}>Quentin</a> et <a href={'mailto://'}>Élaine</a></li>
                </ul>
            </div>
            <Volunteers />

            </div>
            <Collectif/>
    </section>
)

export default About