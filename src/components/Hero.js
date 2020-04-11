import React from 'react';
import {Link} from 'react-router-dom'
import './Hero.css';


const Hero = (props) => {
    return(
        <section className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Hero`}>
            <h1 className={"Hero--Title"}>
                Covid-19 <br />
                Fabrication solidaire
            </h1>
            <h2 className={"Hero--Subtitle"}>
                Les makers d'ile-de-france se mobilisent pour produire du matériel sanitaire d’urgence.
            </h2>
        </section>

    )
}


export default Hero;