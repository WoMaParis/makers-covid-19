import React, { useState, useEffect, Fragment } from 'react'
import Favicon from '../components/Favicon.js'
import { Helmet } from "react-helmet"
import './Models.css'

const Models = () => {
    const [models, setModels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        let models = [];
        try {
            models = await fetch('/.netlify/functions/getData?models=all');
            models = await models.json();

        } catch (error) {
            console.log(error);
        };

        models = models.filter((el) => el.name !== null)
        console.log('Models', models);

        setModels(models);
    };

        fetchData();
    }, []);


    return (
        <Fragment>
            <Favicon icon={'fab'} />
            <Helmet>
                <title>Ecosystème | Makers d'Ile-de-France contre le Covid-19.</title>
                <meta name="description" content="Vision globale de l'écosystème de production." />
            </Helmet>

            <section className={`Models_In_Prod`}>
                <h2 className={"Section__Title"}>
                    Modeles en production
                </h2>
    
                <div className={`Section__Text`}>
                {models.filter((el) => el.state === "Production").map((el, i) => {
    
                    return( 
                    <section key={i} className={'Section'}>
                        <h4 className={'Section__Title'}>{el.name}</h4>
                        {el.imageURL === null ? null : <img className={'Section_Illustration'} src={el.imageURL}/>}
                            <ul className={'Section__List'}>
                                <li>{el.medical === 'TRUE' ? 
                                'Certifié ' + (el.note !== null && el.note.startsWith('Par') ? 
                                el.note[0].toLowerCase() + el.note.slice(1) : '') : 'Non certifié'}</li>
                                <li>Prix: {el.price === null ? 'Non connu' : el.price}</li>
                                <li>Credits: {el.credits !== null && el.credits.startsWith('https') ? 
                                                (<a className={'Simple__Link'} href={el.credits}>{el.credits}</a>) 
                                                : 
                                                el.credits}</li>
                                <li>{el.notice !== null ? (<a className={'Simple__Link'} href={el.notice}>Voir la notice</a>) : 'Pas de notice'}</li>
                            </ul>
                    </section>
                    )
                }
                )}
                </div>
            </section>

            <section className={`Models_In_Research`}>
                <h2 className={"Section__Title"}>
                    Modeles en recherche
                </h2>

                <div className={`Section__Text`}>
                {models.filter((el) => el.state === "Recherche").map((el, i) => {
                    
                    return(
                    <section key={i} className={'Section'}>
                        <h4 className={'Section__Title'}>{el.name}</h4>
                            <ul className={'Section__List'}>
                                <li>{el.medical === 'TRUE' ? 'Certifié' : 'Non certifié'}</li>
                                <li>Prix: {el.price === null ? 'Non connu' : el.price}</li>
                                <li>Credits: <a className={'Simple__Link'} href={el.credits}>{el.credits}</a></li>
                                <li>{el.notice !== null ? (<a className={'Simple__Link'} href={el.notice}>Voir la notice</a>) : 'Pas de notice'}</li>
                            </ul>
                    </section>
                    )}
                )}
                </div>
                </section>
        
           

  
        </Fragment>

        )
}

export default Models;

