import React, { Fragment } from 'react'
import Button from '../components/Button.js'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom'

const AskInformation = (props) => (
    <Fragment>
        <div className={"Section Section--Bordered"}>
                <h2 className={"Section__Title"}>
                Matériels produits
                    </h2>
            <div className={"Section__Text"}>
                Le matériel que nous produisons <strong>n'est pas certifié, c'est une production d'urgence</strong>. Nous faisons en sorte de fournir un matériel le plus adapté possible et validé par des medecins mais nous n'offrons aucunes garanties.
                </div>
                <div className={"Section__Text"}>
                N'oubliez pas de lire la notice fournie avec le materiel livré. Nous faisons en sorte de limiter les risques de contaminations, mais <strong>decontaminez toujours le materiel reçu avant utilisation</strong>.
                </div>
                <div className={"Section__Text"}>    
                Aujourd'hui nous sommes en capacité de produire :
                </div>
                <ul className={"Section__List"}>
                    <li><strong>Des visière de protection</strong>: Nos modèles de production ont été validés par plusieurs hopitaux, ils nous coûtent approximativement 5€ à produire et nous pouvons en produire jusqu'à 1000 / jour.</li>
                <li><strong>Des masques en tissu</strong>: Nos modèles de production sont ceux developpés par l'AFNOR, ils nous coûtent approximativement 4,50 € à produire et nous pouvons en produire jusqu'à 100 / jour pour l'instant.</li>
                    <li><strong>Des adaptateurs</strong> Nos modèles sont toujours en phase de développement et nous pouvons en produire jusqu'à 100 / jour.</li>
                <li><strong>Des surblouses</strong>: Notre modèle a été developpé et validé avec le GHU de Paris, elles nous coutent 4,5€ à produire et nous pouvons en produire jusqu'à 10 / jour pour l'instant.</li>
            </ul>
            <Button className={'Section__Action'}>
                <Link to="/models" >
                   Plus d'informations sur les modèles produits <IoIosArrowRoundForward />
                </Link>
            </Button>
            </div>
        <div className={"Section Section--Emphasis Section--ICenter Section--Horizontal Section--Bordered Section--JSpaceBetween"}>
                <h3 className={"Section__Title"}>
                    Le collectif a besoin d'aide !
                    </h3>
                <Button className={'Section__Action'}>
                    <Link to="/help" >
                        Faire un don <IoIosArrowRoundForward />
                    </Link>
                </Button>
            </div>
    </Fragment>
)

export default AskInformation