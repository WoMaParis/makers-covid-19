import React, { Fragment } from 'react'
import Hero from "./Hero.js"
import Actions from "./Actions.js"
import './Home.css'

const Home = (props) => (
    <Fragment>

        <Hero className={'Hero'} />
        <Actions className={'Actions'} />
    
    </Fragment>

)

export default Home