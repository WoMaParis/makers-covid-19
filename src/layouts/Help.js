import React, { Fragment } from 'react'
import './Help.css'

const Help = (props) => (
    <Fragment>

    <section className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Help`}>
            Help
    </section>
        <section className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Help`}>
            Help
    </section>
        <section className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Help`}>
            Help
    </section>

    </Fragment>
)

export default Help