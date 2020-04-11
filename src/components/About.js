import React from 'react'
import './About.css'

const About = (props) => (

    <section className={`${typeof (props.className) !== 'undefined' ? props.className : ''} About`}>
            About
    </section>
)

export default About