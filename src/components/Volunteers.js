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
      console.log(volunteers);
      
      setVolunteers(volunteers);
      setLoading(false);
    };

    fetchData();
  }, []);


  return (
    <section className={`Volunteers Section ${loading ? 'Volunteers--Loading' : ''}`}>
      <h2 className={"Section__Title"}>
        Les Volontaires
      </h2>
      <div className={`Section__Text`}>
          {volunteers.map((el, i) => (
          <span key={i} className={'Volunteer ToolTip'} data-tooltip={`${el.fab === 'TRUE' ? '🔨' : ''}${el.sewing === 'TRUE' ? '🧵' : ''}${el.coord === 'TRUE' ? '📆‍' : ''}${el.logistics === 'TRUE' ? '🚲' : ''}${el.communication === 'TRUE' ? '💬' : ''}${el.dev === 'TRUE' ? '👩‍💻' : ''}`}>{el.name}, </span>
          ))}
      </div>
    </section>
  )
}

export default Volunteers;
