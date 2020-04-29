import React, { Fragment } from 'react'
import Button from '../components/Button.js'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom'



const AskOptions = (props) => (



    
    <Fragment>
        <div className={"Section Section--Bordered"}>
            <h1 className={"Section__Title"}>
                Demande de matériel matériel sanitaire
            </h1>
            <div className={"Section__Text"}>
                Même si nous faisons en sorte de produire du matériel de la meilleure qualité possible, <strong>le matériel que nous produisons n'est pas certifié, c'est une production d'urgence</strong>.
            </div>
        </div>
        <div className={"Section Section--Bordered Section--Hoverable"}>
            <h2 className={"Section__Title"}>
                Vous avez besoin de petites quantités
                    </h2>
            <h3 className={"Section__Subtitle"}>
                Moins de 50 unités
                    </h3>
            <div className={"Section__Text"}>
                Si vos besoins sont inférieur à 50 unités, le plus simple et le plus rapide est que vous contactiez le lieux de production le plus proche de vous. Vérifier sur la carte interactive les stocks des lieux en contactez les encuite par mail ou téléphone pour récuperer le materiel.
                    </div>
            <div className={"Section__Action"}>
                <Button>
                    <Link to="/ask/stocks" >
                        Voir les stocks disponibles. <IoIosArrowRoundForward />
                    </Link>
                </Button>
            </div>
        </div>


        <div className={"Section Section--Bordered Section--Hoverable"}>
            <h2 className={"Section__Title"}>
                Vous avez des besoins plus importants
        </h2>
            <h3 className={"Section__Subtitle"}>
                Plus de 50 unités
        </h3>
            <div className={"Section__Text"}>
                Si vos besoins sont supérieurs à 50 unités, nous vous invitons à remplir le formulaire de demande pour que votre commande soit gérée et produite par un des lieux de fabrication. Nous vous contacterons ensuite quand celle-ci sera prête.
        </div>
            <div className={"Section__Action"}>
                <Button>
                    <Link to="/ask/form" >
                        Remplir le formulaire de demande <IoIosArrowRoundForward />
                    </Link>
                </Button>
            </div>
        </div>

        <div className={"Section Section--Bordered Section--Hoverable"}>
            <h2 className={"Section__Title"}>
                Vous voulez connaitre l'état d'avancement de votre demande
        </h2>
            <h3 className={"Section__Subtitle"}>
                Vous avez déja rempli le formulaire
        </h3>
            <div className={"Section__Text"}>
                Nous faisons au mieux pour vous tenir informé de l'avancement de votre demande, mais nous pouvons parfois passer au travers de certaines. Retrouvez l'état de votre commande à l'aide du mail de contact que vous avez fourni.
        </div>
            <div className={"Section__Action"}>
                <Button>
                    <Link to="/ask/order" >
                        Retrouver ma/mes demande/s <IoIosArrowRoundForward />
                    </Link>
                </Button>
            </div>
        </div>

    </Fragment>
)

export default AskOptions