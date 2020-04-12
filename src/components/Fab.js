import React, { Fragment } from 'react'
import Map from './Map.js'
import Fabers from './Fabers.js'
import './Fab.css'

const Fab = (props) => (


    <Fragment>

        <Map className={'Map'} />
        <Fabers className={'Fabers'} />

    </Fragment>
)

export default Fab