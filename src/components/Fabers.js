import React from 'react'
import Button from './Button.js'
import { Link } from 'react-router-dom'
import './Fabers.css'

const Fabers = (props) => (

    <section className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Fabers`}>
        <div className={"Fabers__Header"}>
            <h2 className={"Header__Title"}>
                Aider à la fabrication de matériel.
            </h2>
            <div className={"Header__Intro"}>
                Si surtout, vous <strong>ne présentez aucun symptômes et n'êtes pas malade</strong>, et vous voyez l'interêt de :
            </div>
         <ul className={"Header__List"}>
            <li>Centraliser les besoins pour pouvoir y répondre collectivement qu'elle que soit leur taille.</li>
            <li>Faire un fond de solidarité pour que les trésorerie de chacuns ne soit pas un freins à l'entraide.</li>
            <li>Mutualiser les ressources logistiques; matiere premieres, livraison...</li>
            <li>Gagner du temps en partageant les apprentissages techniques; matériaux , modèles...</li>
        </ul>
            <div className={"Header__Intro"}>
                Vous pouvez alors contribuer de plusieurs manières :
            </div>
        </div>  
        <div className={"Fabers__Profiles"}>
            <div className={'Profile'}>
                <h3 className={"Profile__Title"}>
                    1 | Vous faites parti d'un espace de fabrication.
                </h3>
                <p className={"Profile__Description"}>
                Si vous faites parti ou gérez un espace de fabrication dotés d'imprimantes 3D, de découpeuse laser, de machines à coudres, ça peut ètre très utile ! <strong>Discutez avec les administrateurs, pour ne pas prendre de risques inutiles.</strong> Il faut pouvoir mobiliser une communautés la plus restreintes et la plus présente possible.<strong>Nous restons en periode de confinements !</strong>
                </p>
            </div>
            <div className={'Profile'}>
                <h3 className={"Profile__Title"}>
                    2 | Vous pouvez produire chez vous.
                    </h3>
                <p className={"Profile__Description"}>
                    Vous avez votre propre équipement et vous voulez/pouvez contribuer en imprimant des pièces, assemblant des kits, cousant des masques. Le mieux est d'utiliser la carte des lieux du collectif pour <strong>vous rattacher au lab le plus proche de chez</strong> ! Contactez ensuite la personne référente pour voir comment vous organiser !
                </p>
            </div>
        </div>
        <Button className={'Profile__Button'}>
            <a href="https://join.slack.com/t/fabcityparis/shared_invite/zt-d8nqbwf8-4jAaXrZabzZhrll_xD7kNQ" target="_blank" >
                    Rejoignez le Slack de coordination.
                </a>
            </Button>
        <Button className={'Fabers__CTA'}>
            <Link to="/help" >
                Vous cherchez à aider autrement ?
            </Link>
        </Button>
    </section>
)

export default Fabers