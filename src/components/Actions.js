import React from 'react'
import Button from './Button.js'
import { Link } from 'react-router-dom'
import './Actions.css'

const Actions = (props) => (

    <section className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Actions`}>
            <div className={"Actions__Action Action"}>
                <div className={'Action__Text'}>
                    <h3 className={"Action__Title"}>
                        Vous avez des besoins en matériel ?
                    </h3>
                    <p className={"Action__Description"}>
                        Si vous avez ou connaissez des personnes ayant besoin de <strong> matériel en Ile-de-France, visières, masques</strong> ? Le matériel est fourni <strong>gratuitement et bénévolement</strong>, mais ne remplace pas un équipement médical certifié, c'est une solution d'urgence pour pallier au manque.
                    </p>
                    <Button>
                        <Link to="/ask" >
                                Faire une demande de materiel.
                        </Link>
                    </Button>
                </div>
            </div>
            <div className={"Actions__Action Action"} >
                <div className={'Action__Text'}>
                    <h3 className={"Action__Title"}>
                        Vous voulez aider à à produire  ?
                        </h3>
                    <p className={"Action__Description"}>
                        Vous êtes un particulier, une entreprises ou une association située en Ile-de-France, et vous êtes équipé de machines de fabrication ? <strong>Découpeuses laser, imprimantes 3D, machines à coudres...</strong>. Vous ne présentez aucun symptôme et n'êtes pas malade. Rejoignez le slack de coordination pour contribuer à la production.
                        </p>
                    <Button>
                        <Link to="/fab">
                        Rejoindre le collectif !
                        </Link>
                    </Button>

                </div>
            </div>
            <div className={"Actions__Action Action"} >
                <div className={'Action__Text'}>
                    <h3 className={"Action__Title"}>
                        Vous voulez soutenir le collectif ?
                    </h3>
                    <p className={"Action__Description"}>
                        Nous mettons tout cela en oeuvre <strong>gratuitement et bénévolement</strong>, donc si vous voulez contribuer à l'effort, nous avons mis en place une cagnotte sur helloasso. Les sommes récupérées sont/seront utilisées pour rembourser les achats de matières premières et autres dépenses de la communauté. Il n'y <strong>aucun but lucratif à cette démarche.</strong>
                    </p>
                <Button>
                    <Link to="/fab">
                        Voir comment aider.
                    </Link>
                </Button>
                </div>
            </div>
        </section>
)

export default Actions