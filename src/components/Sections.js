import React from 'react'
import './Section.css'

const Section = (props) => (

    <div className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Section`}>
        {props.children}
    </div>
)

export default Section