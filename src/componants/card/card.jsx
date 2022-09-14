import React from 'react';
import Style from './card.module.css'
const Card = ({geant}) => {

    
    return (
        <div className={Style.container}> 
        <div className={Style.card}>
            <p>{geant.nom}</p>
            <p>{geant.poids}</p>
            <p>{geant.taille}</p>
            <p>{geant.anneeCreation}</p>
            <p>{geant.description}</p>
            <img src={geant.img} alt="" />
        
        </div>
        </div>
    );
};

export default Card;