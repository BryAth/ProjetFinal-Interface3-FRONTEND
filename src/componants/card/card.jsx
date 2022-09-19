import React from 'react';
import Style from './card.module.css'





const Card = ({geant}) => {

console.log(geant.nom)


    return (
        <div className={Style.container}>
                <div className={Style.Card}> 
                    <div className={Style.infos}>
            <p>{geant.nom} </p>
                        <div className={Style.der}>
            <p>{geant.taille} </p>
            <p>{geant.poids} </p>  
                        </div>
            <img src={geant.img} alt="" />. 
                    </div>
            <button>read more</button>
                </div>
            </div>


        
        
    );
};

export default Card;