import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Map from '../components/Map.js'
import Button from '../components/Button.js'
import './Fab.css'

const Fab = (props) => (


    <Fragment>
        <section className={`Fab__Note`}>
            <div className={"Section"}>
                <h2 className={"Section__Title"}>
                    Participer à la fabrication de matériel
                </h2>
                <div className={"Section__Text"}>
                    Si et seulement si vous <strong>ne présentez aucun symptôme et n'êtes pas malade</strong>, et que vous voyez l'intérêt de :
                </div>
                <ul className={"Section__List"}>
                    <li>Centraliser les besoins pour pouvoir y répondre collectivement</li>
                    <li>Faire un fond de solidarité pour que les trésoreries de chacun ne soient pas un frein à l'entraide.</li>
                    <li>Mutualiser les ressources logistiques ; matières premières, livraisons...</li>
                    <li>Gagner du temps en partageant les apprentissages techniques ; matériaux, modèles...</li>
                </ul>
                <div className={"Section__Text"}>
                    Vous pouvez contribuer de plusieurs manières :
                </div>
                <div className={'Profiles'}>
                    <div className={'Profiles__Profile'}>
                        <h3 className={"Section__Title"}>
                            Manufacture Ouverte
                        </h3>
                        <h4 className={"Section__Subtitle"}>
                            Vous faites partie d'un espace de fabrication.
                        </h4>
                        <div className={"Section__Text"}>
                            Si vous faites partie ou gérez un espace de fabrication doté d'imprimante(s) 3D, de découpeuse(s) laser, de machine(s) à coudre, ça peut être très utile ! <strong>Discutez avec les administrateurs pour ne pas prendre de risques inutiles</strong>. Il faut pouvoir mobiliser une communauté restreintes et disponible pour éviter les risques de contagions avec trop de roulement. <strong>Nous restons en période de confinements !</strong> 
                        </div>
                        <div className={"Section__Text"}>
                            Pour plus d'informations contactez <a className={'Simple__Link'} href={'mailto:michael@volumesparis.org'}>@Michael</a>.
                        </div>
                    </div>
                    <div className={'Profiles__Profile'}>
                        <h3 className={"Section__Title"}>
                            Manufacture@Maison
                        </h3>
                        <h4 className={"Section__Subtitle"}>
                            Vous pouvez produire chez vous.
                        </h4>
                        <div className={"Section__Text"}>
                            Vous avez votre propre équipement et vous voulez/pouvez contribuer en imprimant des pièces, assemblant des kits, cousant des masques ? Le mieux est d'utiliser la carte des lieux du collectif pour <strong>vous rattacher au lab le plus proche de chez vous </strong>! Contactez ensuite la personne référente pour voir comment vous organiser.
                        </div>
                        <div className={"Section__Text"}>
                            Pour être accompagné, contactez <a className={'Simple__Link'} href={'mailto:vincentguimas@gmail.com'}>@Vincent</a>.
                        </div>
                    </div>
                </div>
            </div>
            <div className={"Section Section--CTA"}>
                <h3 className={"Section__Title"}>
                    Rejoignez la conversation !
                </h3>
                <Button className={'Section__Action'}>
                    <a href="https://join.slack.com/t/fabcityparis/shared_invite/zt-d8nqbwf8-4jAaXrZabzZhrll_xD7kNQ" target="_blank" rel="noopener noreferrer">
                        Le Slack de coordination
                    </a>
                </Button>
            </div>

        </section>
        <Map className={'Fab__Map'} />
    </Fragment>

)

export default Fab