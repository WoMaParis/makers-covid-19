import React, { Fragment } from 'react'
import Hero from "../components/Hero.js"
import Button from '../components/Button.js'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = (props) => (

<Fragment>

        <Hero className={'Home__Hero'} />

        <section className={'Home__Actions Actions'}>

            <div className={'Section Section--Hoverable'}>
                    <h3 className={"Section__Title"}>
                        Vous avez des besoins en matériel ?
                    </h3>
                    <div className={"Section__Text"}>
                        Si vous avez ou connaissez des personnes ayant besoin de <strong> matériel en Ile-de-France, visières, masques</strong> ? Le matériel est fourni <strong>gratuitement et bénévolement</strong>, mais ne remplace pas un équipement médical certifié, c'est une solution d'urgence pour pallier au manque.
                    </div>
                    <div className={"Section__Action"}>
                        <Button>
                            <Link to="/ask" >
                                Faire une demande de materiel.
                            </Link>
                        </Button>
                    </div>
                </div>

            <div className={'Section Section--Hoverable'}>
                    <h3 className={"Section__Title"}>
                        Vous voulez aider à produire  ?
                        </h3>
                    <div className={"Section__Text"}>
                        Vous êtes un particulier, une entreprises ou une association située en Ile-de-France, et vous êtes équipé de machines de fabrication ? <strong>Découpeuses laser, imprimantes 3D, machines à coudres...</strong>. Vous ne présentez aucun symptôme et n'êtes pas malade. Rejoignez le slack de coordination pour contribuer à la production.
                    </div>
                    <div className={"Section__Action"}>
                        <Button>
                            <Link to="/fab">
                                Rejoindre le collectif !
                            </Link>
                        </Button>
                    </div>
                </div>


            <div className={'Section Section--Hoverable'}>
                    <h3 className={"Secction__Title"}>
                        Vous voulez soutenir le collectif ?
                    </h3>
                    <div className={"Section__text"}>
                        Nous mettons tout cela en oeuvre <strong>gratuitement et bénévolement</strong>, donc si vous voulez contribuer à l'effort, nous avons mis en place une cagnotte sur helloasso. Les sommes récupérées sont/seront utilisées pour rembourser les achats de matières premières et autres dépenses de la communauté. Il n'y <strong>aucun but lucratif à cette démarche.</strong>
                    </div>
                    <div className={"Section__Action"}>
                        <Button>
                            <Link to="/help">
                                Voir comment aider.
                            </Link>
                        </Button>
                    </div>
                </div>

        </section>
    
    </Fragment>

)

export default Home