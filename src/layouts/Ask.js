import React, { Fragment } from 'react'
import Iframe from 'react-iframe'
import Button from '../components/Button.js'
import { Link } from 'react-router-dom'
import './Ask.css'

const Ask = (props) => (

 <Fragment>

    <section className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Ask__Informations`}>
            <div className={"Section"}>
                <h2 className={"Section__Title"}>
                    Demande de matériel matériel sanitaire.
                </h2>
                <div className={"Section__Text"}>
                    Même si nous faisons en sorte de produire du materiel de la meilleure qualité possible,<strong> le matériel que nous produisons n'est pas certifié, c'est une production d'urgence</strong>.
                </div>
                <div className={"Section__Text"}>
                    Nous faisons en sorte de répondre le plus justement et rapidement possible à toutes les demandes. Ainsi, voici le nombre d'unités que nous pouvons fournir en moyenne par catégories :
                </div>
                <ul className={"Section__List"}>
                    <li>Petite structure (médical et première nécessité) : <strong>10 - 30 unités</strong></li>
                    <li>Service et centre médical / EHPAD : <strong>10 - 50 unités unités</strong></li>
                    <li>CHU : <strong>100 - 300 unités</strong></li>
                </ul>

            </div>
            <div className={"Section"}>
                <h3 className={"Section__Title"}>
                    Materiels produits et capacité
                </h3>
                <div className={"Section__Text"}>
                    Aujourd'hui nous sommes en capacité de produire :
            </div>
                <ul className={"Section__List"}>
                    <li><strong>Des visière de protection</strong>- 1000 u/jour</li>
                    <li><strong>Des masques en tissus</strong>- 1000 u/jour</li>
                    <li><strong>Des adaptateurs</strong>- 1000 u/jour</li>
                    <li><strong>Des surblouses</strong>- 1000 u/jour</li>
                </ul>
                <div className={"Section__Text"}>
                    Le matériel est fourni à <strong>titre gracieux par le collectif</strong> grâce aux efforts de tous les membres, particuliers, entreprise et associations, <strong>si vous souhaitez aider le collectif, vous pouvez faire un don</strong>.
                </div>
            </div>
            <div className={"Section Section--CTA"}>
                <h3 className={"Section__Title"}>
                    Aidez le collectif
                </h3>
                <Button className={'Section__Action'}>
                    <Link to="/help" >
                        Faire un don !
                    </Link>
                </Button>
            </div>
        </section>

        <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSedKR3azd_ObKBJHwCpZ91FkCRJw6Zmj98BAvR3AHdB5RdvIQ/viewform?embedded=true"
            id="Form"
            className="Ask__Form"
            display="initial"
            position="relative" />
    </Fragment>
)

export default Ask