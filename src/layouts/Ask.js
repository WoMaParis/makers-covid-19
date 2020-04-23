import React, { Fragment } from 'react'
import Favicon from '../components/Favicon.js'
import { Helmet } from "react-helmet"
import { Route, Switch } from 'react-router-dom'
import AskOptions from "../contents/AskOptions";
import AskInformation from "../contents/AskInformation";
import AskForm from "../contents/AskForm";
import MapStocks from "../components/MapStocks";
import './Ask.css'


const Ask = (props) => (

    <Fragment>
        <Favicon icon={'ask'} />

        <Helmet>
            <title>Demander | Makers d'Ile-de-France contre le Covid-19.</title>
            <meta name="description" content="Faire une demande matériel sanitaire, visières, masques, blouse ou autre." />
        </Helmet>

        <Switch>
            <Route path="/ask" exact>

                <section className={`Ask__Actions Section Section--Simple`}>
                        <AskOptions />
                </section>
                <section className="Ask__Informations  Section Section--Simple">
                        <AskInformation />
                </section>
            </Route>
            <Route path="/ask/stocks" exact>
                <MapStocks/>
            </Route>
            <Route path="/ask/form" exact>
                <section className={`Ask__Actions Section Section--Simple`}>
                    <AskForm />
                </section>
                <section className="Ask__Informations  Section Section--Simple">
                    <AskInformation />
                </section>

            </Route>
        </Switch>


    </Fragment>
)

export default Ask