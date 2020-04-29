import React, { Fragment, useState, useEffect } from 'react'
import Button from '../components/Button.js'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'

const AskOrder = (props) => {

    const [orders, setOrders] = useState([]);
    const [contact, setContact] = useState('');
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState(false);
    const orderState = (state)=>{
        switch (state) {
            case 'Récuperé / Livré': return 3
            case 'À récuperer / livrer': return 2
            case 'En production': return 1
            default: return 0
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                let orders = await fetch(`/.netlify/functions/getData?orders=${contact.trim()}`);

                orders = await orders.json();
                setOrders(orders);
                setLoading(false);
                
            } catch (error) { console.log(error); }
        };

        fetchData();
    }, [search]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setLoading(true);
        setSearch(!search);
    }

    return (
    <Fragment>
        <section className={`Ask__Orders Section Section--Simple`}>
            <div className={"Section Section--Bordered"}>
                <div className={"Section__Action"}>
                    <Link to="/ask" >
                        <IoIosArrowRoundBack /> Retour
                </Link>
                </div>
            <h2 className={"Section__Title"}>
                État de votre demande
            </h2>
            <div className={"Section__Text"}>
                        Renseignez ci-dessous l'adresse email qui a été utilisée dans le formulaire. Si nous avons bien reçu des demandes associées, vous en verrez le status pour chacunes.
            </div>
                </div>

                <form className={"Section Section--Simple Section--Horizontal Section--Emphasis Section--Bordered"} onSubmit={handleSubmit}>
                <input 
                    className={"Section Section--Bordered"}
                    type="mail"
                    value={contact}
                    placeholder={"adresse email"}
                    onChange={(e)=>{setContact(e.target.value); setLoading(true)}}
                />
                <input 
                    className={"Section Section--Bordered "}
                    type="submit" 
                    value="Voir mes demandes" 
                />
            </form>
            <div className={"Section Section--Bordered AskOrders__Information"}>
                <h3 className={"Section__Title"}>
                        Comprendre les statuts
                </h3>
                <ul className={"Section__List"}>
                    <li><strong>À produire</strong>: La demande a bien été réceptionnée, mais aucun lieux n'a encore commencé à la produire, par faute de matériel, temps ou information.</li>
                    <li><strong>En production</strong>: Un lieu est actuellement en train de produire votre demande. Dans la mesure du possible, la quantité déjà fabriquée sera renseignée.</li>
                    <li><strong>À récuperer / Livrer</strong> La production de votre demande dans un lieu est terminée, on cherche maintenant à la livrer ou que vous veniez la chercher.</li>
                    <li><strong>Récuperé / Livré</strong>: Vous avez normalement reçu votre demande.</li>
            </ul>

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
        </section>    
            <section className={`Ask__Results Section Section--Simple`}>

            <div className={"Section Section--Bordered"}>
                <h2 className={"Section__Title"}>
                        Vos demandes
                </h2>

            </div>
                <div className={`Section Section--Simple Section--Bordered ${loading ? 'Section--Loading' : ''}`}>

                {orders.length === 0 && contact !== '' ? (
                    <div className={'Section'}>
                        <h3 className='Section--Title'>
                            Aucune demandes
                        </h3>
                        <div className='Section--Text'>
                            Nous n'avons aucune demande reliée à cette adresse mail
                        </div>
                    </div>
                    ):''}


                    {contact === '' ? (
                        <div className={'Section'}>
                            <h3 className='Section--Title'>
                                Remplissez le formulaire
                        </h3>
                        <div className={"Section__Text"}>
                                Remplissez le formulaire pour voir l'état de vos demandes.
                        </div>
                        </div>
                    ) : ''}
                {orders.map((el, i) =>(

                    <div className={`Section AskOrder__Order Section--Simple Section--Horizontal OrderState--${orderState(el.status)}`} key={i} >

                        <div className={`Section`}>
                            <h3 className='Section__Title'>
                                {el.date}
                            </h3>
                            <div className='Section__Subtitle'>
                                {el.contact}
                            </div>
                            <div className='Section__Text'>
                                {`${el.asked} ${el.models}`} 
                            </div>
                        </div>

                        <div className={"Section"}>
                            <h3 className='Section__Title'>{el.status}</h3>
                            <div className='Section__Subtitle'>
                                {el.produced === null ? '0' : el.produced} / {el.asked}
                            </div>

                            <div className='Section__Text'>
                                {el.lead === null ? 'Pas encore attribuée' : (
                                <a className={'Simple__Link'} href={`mailto:${el.leadContact}`} target="_self" rel='noopener noreferrer' >
                                    @{el.lead}
                                </a>
                                )}
                            </div>
                        </div>

                    </div>
                    )
                )}

                </div>
        
        </section>
    </Fragment>
)}

export default AskOrder