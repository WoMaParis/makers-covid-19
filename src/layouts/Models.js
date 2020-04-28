import React, { useState, useEffect, Fragment } from 'react'
import Favicon from '../components/Favicon.js'
import Button from '../components/Button.js'
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
        setModels(models);
        console.log(models);
        
    };

        fetchData();
    }, []);


    return (
        <Fragment>
            <Favicon icon={'fab'} />
            <Helmet>
                <title>Les Modelès | Makers d'Ile-de-France contre le Covid-19.</title>
                <meta name="description" content="Les differents modèles de materiels produit par le collectif." />
            </Helmet>

            <section className={`Section Section--Simple Models_In_Prod`}>
                <div className={"Section Section---Bordered"}>
                    <h1 className={"Section__Title"}>
                    Modèles en production
                    </h1>  
                    <div>
                        Le matériel que nous produisons n'est pas certifié, c'est une production d'urgence. Nous faisons en sorte de répondre le plus justement et rapidement possible à toutes les demandes. Par souci d'organisation, faites une seule demande par type de matériel.
                    </div>
                </div>
                
                {models.filter((el) => el.state === "Production").map((el, i) => {
    
                    return( 
                        <div key={i} className={'Section Section--Horizontal Section--Bordered Section--Simple Section--NoStack'}>
                            {el.imageURL === null ? null : <img alt={el.name}  className={'Section_Illustration'} src={el.imageURL}/>}
                            <div className="Section Section--Bordered">

                            <h3 className={'Section__Title'}>{el.name}</h3>
                            <ul className={'Section__List'}>
                                    <li><strong>{el.medical === 'TRUE' ? 
                                'Validé ' + (el.note !== null && el.note.startsWith('Par') ? 
                                el.note[0].toLowerCase() + el.note.slice(1) : '') : 'Pas encore validé'}</strong></li>
                                    <li>Coût approx. de production: <strong>{el.price === null ? 'Non connu' : el.price}</strong></li>
                                {el.credits && (
                                    <li>Credits: <strong>{el.credits}</strong></li>
                                )}
                                {el.file && (
                                        <li><a className={'Simple__Link'} href={el.file}>Fichiers source</a></li>
                                )}
                                </ul>
                                {el.notice !== null ? (<div className={'Section__Actions'}>
                                <Button>
                                    <a  href={el.notice}>Voir la notice</a>
                                </Button>
                                </div>) : ''}
                            </div>
                    </div>
                    )
                }
                )}

            </section>

            <section className={`Models_In_Research Section Section--Simple`}>
                <div className={"Section Section--Bordered"}>
                    <h1 className={"Section__Title"}>
                        Modèles en developpement
                    </h1>
                    <div>
                        Ces modèles sont en cours de developpement et ne sont pas actuellement en production pour differentes raisons; trop longs à produire, pas pratiques, pas validés...
                    </div>
                </div>

                {models.filter((el) => el.state === "Recherche").map((el, i) => {

                    return (
                        <div key={i} className={'Section Section--Horizontal Section--Simple Section--Bordered Section--NoStack'}>
                            {el.imageURL === null ? null : <img alt={el.name} className={'Section_Illustration'} src={el.imageURL} />}
                            <div className="Section Section--Bordered">

                                <h3 className={'Section__Title'}>{el.name}</h3>
                                <ul className={'Section__List'}>
                                    <li><strong>{el.medical === 'TRUE' ?
                                        'Validé ' + (el.note !== null && el.note.startsWith('Par') ?
                                            el.note[0].toLowerCase() + el.note.slice(1) : '') : 'Pas encore validé'}</strong></li>
                                    <li>Coût approx. de production: <strong>{el.price === null ? 'Non connu' : el.price}</strong></li>
                                    {el.credits && (
                                        <li>Credits: <strong>{el.credits}</strong></li>
                                    )}
                                    {el.file && (
                                        <li><a className={'Simple__Link'} href={el.file}>Fichiers source</a></li>
                                    )}
                                </ul>
                                {el.notice !== null ? (<div className={'Section__Actions'}>
                                    <Button>
                                        <a href={el.notice}>Voir la notice</a>
                                    </Button>
                                </div>) : ''}
                            </div>
                        </div>
                    )
                }
                )}

            </section>
           

  
        </Fragment>

        )
}

export default Models;

