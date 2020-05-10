import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Modal.css';


const Modal = (props) => {

  const [active, setActive] = useState(true);

  const close = () => {setActive(false) };

  return (

    <div className={`Modal ${active ? 'Modal--Active' : ''}`} onClick={close}>
      <div className={`Modal__Content  Section`}>

        <h2 className={"Section__Title"}>
          D'autres prennent le relais
        </h2>
        <div className={`Section__Text`}>
          Après un peu plus d'un mois de production, <strong>presque 30 000 masques, visieres, adaptateurs ou surblouses produits, et plus de 250 demandes livrées</strong>, nous passons finalement le relai. Les industriels et les circuits de distributions traditionnels sont maintenant en place pour répondre aux demandes de manière efficace.
       </div>
        <div className={`Section__Text`}>
          Le formulaire et le site restent néanmoins disponibles, mais les demandes ne sont plus suivies systématquement, et les bénévoles et ateliers reprennent eux aussi petit à petit leurs activités.
       </div>
        <div className={`Section__Text`}>
          Tout cela n'aurais jamais pu etre possible sans l'investissement de plus de <strong>180 volontaires, de plus de 20 lieux de fabrication, et d'industriels et institutions partenaires</strong>.
       </div>
        <h3 className={`Section__Title`}>
          Encore un énorme merci à eux.
       </h3>
        <div
          className="Close__Button"
          onClick={close}>
        </div>
      </div>
    </div>
  )
}

export default Modal;
