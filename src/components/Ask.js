import React from 'react'
import Iframe from 'react-iframe'
import Button from './Button.js'
import { Link } from 'react-router-dom'
import './Ask.css'

const Ask = (props) => (

    <section className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Ask`}>

        <section className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Informations`}>
            <div className={"Informations__Header"}>
                <h2 className={"Header__Title"}>
                    Demande de matériel matériel sanitaire.
            </h2>
                <div className={"Header__Intro"}>
                    Même si nous faisons en sorte de produire du materiel de la meilleure qualité possible,<strong> le matériel que nous produisons n'est pas certifié, c'est une production d'urgence</strong>.
            </div>
                <div className={"Header__Intro"}>
                    Nous faisons en sorte de répondre le plus justement et rapidement possible à toutes les demandes. Ainsi, voici le nombre d'unités que nous pouvons fournir en moyenne par catégories :
            </div>

                <ul className={"Header__List"}>
                    <li>Petite structure (médical et première nécessité) : <strong>10 - 30 unités</strong></li>
                    <li>Service et centre médical / EHPAD : <strong>10 - 50 unités unités</strong></li>
                    <li>CHU : <strong>100 - 300 unités</strong></li>
                </ul>
            </div>
            <div className={"Informations__Header"}>
                <h3 className={"Header__Title"}>
                    Materiels produits et capacité
            </h3>
                <div className={"Header__Intro"}>
                    Aujourd'hui nous sommes en capacité de produire :
            </div>
                <ul className={"Header__List"}>
                    <li><strong>Des visière de protection</strong>- 1000 u/jour - cout 5€/u</li>
                    <li><strong>Des masques en tissus</strong>- 1000 u/jour - cout 1€/u</li>
                    <li><strong>Des adaptateurs</strong>- 1000 u/jour - cout 5€/u</li>
                    <li><strong>Des surblouses</strong>- 1000 u/jour - cout 5€/u</li>
                </ul>
            </div>
            <div className={"Informations__Header"}>
                <h3 className={"Header__Title"}>
                    Prix et contribution
            </h3>
                <div className={"Header__Intro"}>
                    Le matériel est fourni à <strong>titre gracieux par le collectif</strong> grâce aux efforts de tous les membres, particuliers, entreprise et associations, <strong>si vous souhaitez aider le collectif, vous pouvez faire un don</strong>.
            </div>
            </div>
            <Button className={'Informations__CTA'}>
                <Link to="/help" >
                    Faire un don !
            </Link>
            </Button>
        </section>

        <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSedKR3azd_ObKBJHwCpZ91FkCRJw6Zmj98BAvR3AHdB5RdvIQ/viewform?embedded=true"
            width="100%"
            height="50%"
            id="Form"
            className="Form"
            display="initial"
            position="relative" />
    </section>
)

export default Ask