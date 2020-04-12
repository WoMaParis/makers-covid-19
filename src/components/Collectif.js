import React, { useState, useEffect } from 'react';
import './Collectif.css';


const Collectif = () => {

  const [organisations, setOrganisations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let organisations = [];
      try {
        organisations = await fetch('/.netlify/functions/getData?organisations=all');
        organisations = await organisations.json();

      } catch (error) {
        console.log(error);
      };

      setOrganisations(organisations);
      setLoading(false);
    };

    fetchData();
  }, []);


  return (
    <section className={`Collectif Section ${loading ? 'Collectif--Loading' : ''}`}>
        <h3 className={"Section__Title"}>
          Le Collectif
        </h3>
        <div className={"Section__Text"}>
          Toutes les structures et organisations, petites ou grandes, qui contribuent à faire fonctionner ce mode de production.
        </div>
      <div className={`Collectif__Members Section__Text`}>

        {organisations.map((el, i) => {
          
          return( 
            <div key={i} className={'Member'}>
              {el.websiteUrl === null ?
                (<span className={'Member__Link'}>{el.name}</span>)
                :
                (<a className={'Member__Link'} href={el.websiteUrl} target="_blank" rel="noopener noreferrer">{el.name}</a>)
              }



              {el.logoUrl === null ?
                (<span className={'Member__Initials'} > {el.name.slice(0,2)} </span>)
                : 
                (<img className={'Member__Logo'} alt={el.name} src={el.logoUrl} />)
              }
            </div>
            )}
        )}
       </div>
    </section>

  )
}

export default Collectif;
