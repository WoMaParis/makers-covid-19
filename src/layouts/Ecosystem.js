import React, { Fragment } from 'react'
import Map from '../components/Map.js'
import Favicon from '../components/Favicon.js'
import { Helmet } from "react-helmet"
import './Ecosystem.css'

const Ecosystem = (props) => (

    
    <Fragment>
        <Favicon icon={'ecosystem'} />
        <Helmet>
            <title>Ecosystème | Makers d'Ile-de-France contre le Covid-19.</title>
            <meta name="description" content="Vision globale de l'écosystème de production." />
        </Helmet>

        <Map className={'Ecosystem__Map'} />
    </Fragment>

)

export default Ecosystem