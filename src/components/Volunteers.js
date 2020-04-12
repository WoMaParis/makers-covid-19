import React, { useState, useEffect } from 'react';
import './Volunteers.css';


const Volunteers = () => {

  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let volunteers = [];
      try {
        volunteers = await fetch('/.netlify/functions/getData?volunteers=all');
        volunteers = await volunteers.json();

      } catch (error) {
        console.log(error);
      };

      setVolunteers(volunteers);
      setLoading(false);
    };

    fetchData();
  }, []);


  return (
    <section className={"Volunteers section"}>
      <div className={'Volunteers__Header'}>
        <h3 className={"Header__Title"}>
          Les Volontaires
        </h3>
      </div>
      <div className={`Volunteers__Volunteers ${loading ? 'Volunteers__Volunteers--Loading' : ''}`}>

        {volunteers.map((el, i) => {
          
          return( 
            <span key={i} className={'Volunteer'}>{el.name}, </span>
            )
      }
        )}
       </div>
    </section>

  )
}

export default Volunteers;
