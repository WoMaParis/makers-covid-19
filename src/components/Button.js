import React from 'react'
import './Button.css'

const Button = (props) => (

    <div className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Button`}>
        {props.children}
    </div>
)

export default Button