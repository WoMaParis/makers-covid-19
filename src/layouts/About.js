import React, { Fragment } from 'react'
import Collectif from '../components/Collectif.js'
import Volunteers from '../components/Volunteers.js'
import './About.css'

const About = (props) => (

    <Fragment>

        <section className={'Team'}>

            <div className={"Section"}>
                <h2 className={"Section__Title"}>
                    À propos du collectif Makers x Covid-19 Paris.
                </h2>
                <div className={"Section__Text"}>
                    Dès le début du confinement et les première pénuries, les initiatives de makers isolés foisonnent sur les réseaux (principalement des groupes facebook et outils collaboratifs comme Slack, Mattermost et Discord déjà utilisés par les communautés.)
                </div>
            </div>
            <div className={"Section"}>
                <h3 className={"Section__Title"}>
                    Contacter les référent.e.s
                </h3>
                <ul className={"Section__List"}>
                    <li><strong>Coordination : </strong><a className={'Simple__Link'} href={'mailto://'}>Michael</a> </li>
                    <li><strong>Production laser & 3d : </strong><a className={'Simple__Link'} href={'mailto://'}>Corentin</a> et <a className={'Simple__Link'} href={'mailto://'}>Florence</a></li>
                    <li><strong>Production textile : </strong><a className={'Simple__Link'} href={'mailto://'}>Antonin</a> et <a className={'Simple__Link'} href={'mailto://'}>Virginie</a></li>
                    <li><strong>Financement et partenariats : </strong><a className={'Simple__Link'} href={'mailto://'}>Minh</a> et <a className={'Simple__Link'} href={'mailto://'}>Andy</a></li>
                    <li><strong>Site & Communication : </strong><a className={'Simple__Link'} href={'mailto://'}>Quentin</a> et <a className={'Simple__Link'} href={'mailto://'}>Élaine</a></li>
                </ul>
            </div>

            <Volunteers />

        </section>
        <section className={'Organisations'}>
            <Collectif/>
        </section>
    </Fragment >

)

export default About