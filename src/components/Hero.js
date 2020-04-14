import React, { useState, useEffect } from 'react';
import './Hero.css';


const Hero = (props) => {

    const [milestones, setMilestones] = useState([]);
    const [Loading, setLoading] = useState(true);
    const backgroundUrls = ['CC_HOMEMAKERS_1.jpg', 'CC_HOMEMAKERS5_Antoine.jpg','CC_VOLUMES_OLIVIA.png']
    const backgroundUrl = backgroundUrls[Math.floor(Math.random() * Math.floor(backgroundUrls.length))]

    
    useEffect(() => {
        const fetchData = async () => {
            let milestones = [];
            try {
                milestones = await fetch('/.netlify/functions/getData?milestones=all');
                milestones = await milestones.json();

                milestones = milestones.filter((el)=>(['Unités produites', 'Lieux de fabrication','Volontaires'].includes(el.unit)))                

            } catch (error) {
                console.log(error);
            };
            
            setMilestones(milestones);
            setLoading(false);
        };

        fetchData();
    }, []);



    return(
        <section className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Hero`}>
            <h1 className={"Hero__Title"}>
                Covid-19 <br />
                Fabrication solidaire
            </h1>
            <h2 className={"Hero__Subtitle"}>
                Les makers d'ile-de-france se mobilisent pour produire du matériel sanitaire d’urgence.
            </h2>
            <ul className={`Hero__Milestones ${Loading ? 'Hero__Milestones--Loading' : ''}`}>

                {milestones.map((el, i) => {
                    return(
                        <li key={i} className={'Milestone'}>
                        <span className={'Milestone__Icon'}>{el.icon}</span>
                        <span className={'Milestone__Number'}>{el.value}</span>
                        <span className={'Milestone__Descriptif'}>{el.unit}</span>
                    </li>
                    )}
                )}

            </ul>
            <div className={`Hero__Backgrounds`}>
                <img className={'Hero__Background'} alt={'Faire une demande'} src={`/images/${backgroundUrl}`} />
            </div>
        </section>

    )
}


export default Hero;