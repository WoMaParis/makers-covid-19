import React from 'react'
import {Button} from 'semantic-ui-react'
import './Home.css'

const Home = (props) => (

    <section className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Home`}>
            <div className={"Home__Action Action"}>
                {/* <img className={"Action__Illustration"} src="https://via.placeholder.com/150" /> */}
                <div className={'Action__Text'}>
                    <h3 className={"Action__Title"}>
                        Vous avez des besoins en matériel ?
                    </h3>
                    <p className={"Action__Description"}>
                    Si vous avez ou connaissez des personnes ayant besoin de <strong> matériel en Ile-de-France, visières, masques</strong> ? Le matériel est fourni <strong>gratuitement et bénévolement</strong>, mais ne remplace pas un équipement médical certifié, c'est une solution d'urgence pour pallier au manque.
                    </p>

                    <Button as='a' className="ui icon left labeled button FCblue" href="https://docs.google.com/forms/d/e/1FAIpQLSedKR3azd_ObKBJHwCpZ91FkCRJw6Zmj98BAvR3AHdB5RdvIQ/viewform" target="_blank" rel="noopener noreferrer" >
                        <i aria-hidden="true" className="paper plane outline icon"></i>
                        Faire une demande de materiel.
                    </Button>
                </div>
            </div>
                <div className={"Home__Action Action"} >
                {/* <img className={"Action__Illustration"} src="https://via.placeholder.com/150" /> */}
                <div className={'Action__Text'}>
                        <h3 className={"Action__Title"}>
                            Vous voulez  aider à fabriquer et à  produire  ? 
                        </h3>
                        <p className={"Action__Description"}>
                            Vous êtes un particulier, une entreprises ou une association située en Ile-de-France, et vous êtes équipé de machines de fabrication ? <strong>Découpeuses laser, imprimantes 3D, machines à coudres...</strong>. Vous ne présentez aucun symptôme et n'êtes pas malade. Rejoignez le slack de coordination pour contribuer à la production.
                        </p>

                    <Button as='a'  className="ui icon left labeled button FCred" href="https://join.slack.com/t/fabcityparis/shared_invite/zt-d8nqbwf8-4jAaXrZabzZhrll_xD7kNQ" target="_blank" rel="noopener noreferrer" >
                        <i aria-hidden="true" className="conversation icon"></i>
                            Rejoindre la coordination !
                        </Button>

                    </div>
                </div>
                <div className={"Home__Action Action"} >
                {/* <img className={"Action__Illustration"} src="https://via.placeholder.com/150" /> */}
                <div className={'Action__Text'}>
                    <h3 className={"Action__Title"}>
                        Vous voulez soutenir le collectif ?
                    </h3>
                    <p className={"Action__Description"}>
                        Nous mettons tout cela en oeuvre <strong>gratuitement et bénévolement</strong>, donc si vous voulez contribuer à l'effort, nous avons mis en place une cagnotte sur helloasso. Les sommes récupérées sont/seront utilisées pour rembourser les achats de matières premières et autres dépenses de la communauté. Il n'y <strong>aucun but lucratif à cette démarche.</strong>
                    </p>


                    <Button as='a' className="ui icon left labeled button FCgreen" href="https://www.helloasso.com/associations/fab-city-grand-paris/formulaires/1/widget" target="_blank" rel="noopener noreferrer" >                        <i aria-hidden="true" className="money bill alternate outline icon"></i>
                        Faire un don sur Helloasso !
                    </Button>
                </div>
            </div>
        </section>
)

export default Home