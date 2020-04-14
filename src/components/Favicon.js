import React from 'react'
import { Helmet } from "react-helmet"


const Favicon = ({icon}) => (
    <Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href={`/favicons/${icon}/apple-touch-icon.png`}/>
        <link rel="icon" type="image/png" sizes="32x32" href={`/favicons/${icon}/favicon-32x32.png`}/>
        <link rel="icon" type="image/png" sizes="16x16" href={`/favicons/${icon}/favicon-16x16.png`}/>
        <link rel="manifest" href="/site.webmanifest"/>
    </Helmet>
)


export default Favicon